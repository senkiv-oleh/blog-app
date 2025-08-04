# Blog App

This project is a full-featured web application developed as an example of a blog that uses modern technologies to create a dynamic and efficient user experience. It demonstrates the principles of working with Next.js 13+ App Router, state management with Redux Toolkit, and interacting with the Firestore database from Firebase.

## Table of Contents
- [Live Demo](#live-demo)
- [Core Features](#core-features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Improvements](#improvements)
- [Deployment](#deployment)
- [Author](#author)
- [License](#license)

## Live Demo

You can view the live demo of the application at [Blog App Demo](https://blog-app-y4sl.vercel.app/).



##  Core Features

- **View Posts:** Browse a list of all created posts.
- **Create Posts:** Add new posts with a title, content, and author.
- **Edit Posts:** Modify existing posts using a dedicated form.
- **Delete Posts:** Remove posts permanently from the database.
- **Centralized State:** Global state is managed using **Redux Toolkit** for reliability and predictability.

---

## Technologies Used

- **[Next.js 13+](https://nextjs.org/):** React framework with SSR and App Router.
- **[React](https://reactjs.org/):** JavaScript library for building UIs.
- **[TypeScript](https://www.typescriptlang.org/):** Static typing for safer code.
- **[Redux Toolkit](https://redux-toolkit.js.org/):** Simplified and efficient state management.
- **[Firebase Firestore](https://firebase.google.com/docs/firestore):** Cloud NoSQL database.
- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework.
- **[Zod](https://zod.dev/):** TypeScript-first schema declaration and validation.
- **[React Hook Form](https://react-hook-form.com/):** Efficient form handling and validation.
- **[Firebase Authentication](https://firebase.google.com/docs/auth):** Secure user authentication and management.


## Getting Started

### 1. Clone the repository

```bash
git clone [your-repository-url]
cd [your-project-folder]
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Firebase

* Go to [Firebase Console](https://console.firebase.google.com/), create a project and register a web app.
* Copy your Firebase config and create a `.env.local` file at the project root with the following content:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.



##  Project Structure

```
/src
├── app/                        # App Router folders and pages
│   ├── create/                 # Dynamic routes for creating a new post
│   │   └── page.tsx            # Create post form
│   ├── post/[id]/              # Dynamic routes for viewing a single post
│   │   ├── edit/               # Edit post page
│   │   │   └── page.tsx        # Edit post form
│   │   └── page.tsx            # View post details
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Main layout
│   ├── page.tsx                # Home page - list of posts
│   └── providers.tsx           # Context providers
├── components/                 # Reusable UI components
│   ├── comments/               # Components for comments
│   │   ├── CommentForm.tsx     # Form for adding comments
│   │   └── CommentList.tsx     # List of comments
│   ├── PostForm.tsx            # Form for creating/editing posts
│   ├── Home.tsx                # Home page - list of posts
│   ├── PostDetails.tsx         # Post details page
│   ├── PostItem.tsx            # Individual post item
│   └── PostList.tsx            # List of posts
├── hooks/                      # Custom React hooks
│   ├── swr/                    # SWR hooks for data fetching
│   │   ├── usePost.ts          # Hook for fetching a single post
│   │   └── usePosts.ts         # Hook for fetching posts
│   └── redux.ts                # Redux hooks
├── store/                      # Redux store and slices
│   ├── features/               # Redux slices
│   │   ├── postsSlice.ts       # Slice for managing posts
│   │   └── commentsSlice.ts    # Slice for managing comments
│   └── store.ts                # Redux store configuration
├── types/                      # TypeScript types
│   ├── comments.ts             # Type definitions for comments
│   └── post.ts                  # Type definitions for posts
├── utils/                      # Utility functions and constants
│   ├── fetchers.ts             # Data fetching utilities
│   ├── firebase.ts             # Firebase configuration and initialization
│   └── formatDate.ts           # Date formatting utility
├── validation/                 # Validation schemas
│   ├── validationPost.ts       # Validation schema for posts
│   └── validationComment.ts    # Validation schema for comments
```


## Usage

* **View Posts:** Navigate to the home page to see all available posts.
* **Create Post:** Add a new post via the creation form (on the main page or a dedicated `/create` route if implemented).
* **Edit Post:** Click on any post, then click **Edit** to open `/post/[id]/edit`.
* **Delete Post:** Use the delete button to remove a post directly from the list or the post detail page.
* **Comments:** Users can add comments to posts. The comment form is available on each post detail page, and comments are displayed below the post content.


## Improvements
This project can be extended with additional features such as:
- User authentication and authorization.
- Pagination for posts and comments.
- Search functionality for posts.
- Integration with a rich text editor for post content.
- Unit and integration tests for components and Redux slices.
- Dark mode support using Tailwind CSS.

## Deployment

You can deploy the app to platforms like **Vercel**, **Firebase Hosting**, or **Netlify**. Make sure to set the environment variables accordingly.


## Author

Developed by [Oleh Senkiv](https://github.com/senkiv-oleh). Contributions and feedback are welcome!



## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
