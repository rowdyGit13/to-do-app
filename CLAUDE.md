# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server (Next.js dev server on localhost:3000)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint code quality checks

### Database Commands
- `npm run db:generate` - Generate Drizzle database migrations from schema changes
- `npm run db:migrate` - Apply pending migrations to database

## Architecture Overview

This is a **Next.js 14 ToDo application** with the following technology stack:

### Core Stack
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** + **shadcn/ui** components for styling
- **PostgreSQL** database with **Drizzle ORM**
- **Clerk** for authentication and user management
- **Stripe** for subscription payments

### Database Layer
- **Drizzle ORM** with PostgreSQL
- Database configuration in `drizzle.config.ts`
- Schema definitions in `db/schema/` (todos and profiles)
- Query functions in `db/queries/`
- Database instance in `db/db.ts`

### Authentication & Authorization
- **Clerk** handles all authentication
- Middleware in `middleware.ts` protects `/todo` routes
- User profiles auto-created on first login in `app/layout.tsx`
- Subscription status managed via Stripe webhooks

### Data Flow Pattern
1. **Server Actions** (`actions/` folder) handle form submissions and mutations
2. **Query functions** (`db/queries/`) handle database operations  
3. **Schema definitions** (`db/schema/`) define data structures and types
4. All mutations use `revalidatePath("/todo")` for cache invalidation

### Key Components
- `components/todo-list.tsx` - Main todo interface with optimistic updates
- `components/header.tsx` - Navigation and auth state
- `components/ui/` - shadcn/ui component library
- `app/todo/page.tsx` - Protected todo page
- `app/marketing/` - Public marketing pages

### Payment Integration
- Stripe webhooks handle subscription status changes
- Profile membership status updated based on subscription state
- Webhook endpoint at `app/api/stripe/webhooks/route.ts`

### Environment Setup
Requires `.env.local` with:
- `DATABASE_URL` - PostgreSQL connection string
- `STRIPE_SECRET_KEY` - Stripe API key
- Clerk authentication keys

## Key Patterns

### Server Actions Pattern
All data mutations use Next.js Server Actions returning `ActionState` type with consistent error handling and cache revalidation.

### Optimistic Updates
Todo list component uses optimistic UI updates before server confirmation for better UX.

### Type Safety
Drizzle generates `InsertTodo` and `SelectTodo` types from schema definitions for complete type safety across the data layer.