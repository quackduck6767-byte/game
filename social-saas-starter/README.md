# Social Media Scheduling SaaS Starter

A production-ready Next.js SaaS starter for automated social media scheduling. Built with modern best practices and designed for commercial use.

## Features

- 🔐 **Authentication**: Email/password login with NextAuth.js
- 📅 **Post Scheduling**: Schedule posts for future publishing
- 🔗 **Multi-Platform Support**: Connect Twitter, LinkedIn, Facebook, Instagram
- 📊 **Dashboard**: View and manage all your scheduled content
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- ♿ **Accessible**: WCAG 2.1 AA compliant components
- 🛡️ **Type-Safe**: Full TypeScript support with Zod validation
- 💾 **Database**: PostgreSQL with Prisma ORM

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL + Prisma
- **Auth**: NextAuth.js
- **Styling**: Tailwind CSS
- **Validation**: Zod
- **Forms**: React Hook Form

## Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd social-saas-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your:
   - Database URL
   - NextAuth secret (generate with: `openssl rand -base64 32`)
   - Social media API credentials (optional for now)

4. **Set up the database**
   ```bash
   npm run db:push
   npm run db:generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
social-saas-starter/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   ├── auth/             # Authentication endpoints
│   │   └── posts/            # Post management endpoints
│   ├── dashboard/            # Protected dashboard pages
│   ├── login/                # Login page
│   ├── signup/               # Signup page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── components/
│   ├── forms/                # Form components
│   └── ui/                   # Reusable UI components
├── lib/
│   ├── auth.ts               # Auth configuration
│   ├── prisma.ts             # Prisma client
│   ├── utils.ts              # Utility functions
│   └── validations.ts        # Zod schemas
├── prisma/
│   └── schema.prisma         # Database schema
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Creating Your First User

Since this is a starter kit, you'll need to create your first user. You can:

1. **Build a signup page** (recommended for production)
2. **Create via database directly**:
   ```sql
   INSERT INTO users (id, email, password, name) 
   VALUES ('user-id', 'you@example.com', '$2a$10$hashed-password', 'Your Name');
   ```
3. **Use Prisma Studio**:
   ```bash
   npx prisma studio
   ```

## API Endpoints

### Authentication
- `POST /api/auth/signin` - Sign in
- `POST /api/auth/signout` - Sign out
- `GET /api/auth/session` - Get current session

### Posts
- `GET /api/posts` - List all posts for authenticated user
- `POST /api/posts` - Create a new scheduled post

## Customization

### Adding Social Media Integrations

To add real social media posting:

1. Get API credentials from each platform's developer portal
2. Implement OAuth flows in `app/api/auth/`
3. Add posting logic in API routes using platform SDKs
4. Set up cron jobs or queue workers for scheduled publishing

### Styling

Modify `tailwind.config.ts` to change colors, fonts, and themes.

### Database

Edit `prisma/schema.prisma` and run:
```bash
npm run db:migrate
```

## Commercial License

This code is provided under a **commercial license**. You may:

✅ Use in commercial products  
✅ Modify and customize for clients  
✅ Deploy unlimited projects  

You may **NOT**:

❌ Resell as-is or as a template  
❌ Share source code publicly  
❌ Distribute to third parties  

See LICENSE file for full terms.

## Support

For questions or issues:
- Documentation: `/docs`
- Email: support@yourcompany.com

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history.

---

Built with ❤️ for entrepreneurs and developers
