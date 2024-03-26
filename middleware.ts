import { authMiddleware } from "@clerk/nextjs";
//https://clerk.com/docs/quickstarts/nextjs

export default authMiddleware({
  publicRoutes: ["/api/:path*"], //allows access from front of store
  // Allow signed out users to access the specified routes:
  // publicRoutes: ['/anyone-can-visit-this-route'],
  // Prevent the specified routes from accessing
  // authentication information:
  // ignoredRoutes: ['/no-auth-in-this-route'],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
// Exclude files with a "." followed by an extension, which are typically static files.
// Exclude files in the _next directory, which are Next.js internals.
//"/((?!.+\\.[\\w]+$|_next).*)",

// Re-include any files in the api or trpc folders that might have an extension
//"/(api|trpc)(.*)"
