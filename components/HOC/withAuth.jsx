import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

const withAuth = (Component) => {
  const Auth = (props) => {
    const { isLoggedIn } = useAuth();
    const router = useRouter();
    
    console.log(isLoggedIn, "==isLoggedIn:withAuth");
    useEffect(() => {
      if (!isLoggedIn && !localStorage.getItem("accessToken")) {
        router.push("/signin");
      }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
      return null;
    }

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = async (ctx) => {
      if (Component.getInitialProps) {
        return await Component.getInitialProps(ctx);
      }
    };
  }

  return Auth;
};

export default withAuth;















// // components/HOC/withAuth.js
// import { useRouter } from 'next/navigation';
// import { useAuth } from '@/context/AuthContext';

// const withAuth = (Component) => {
//   const Auth = (props) => {
//     const { isLoggedIn } = useAuth();
//     const router = useRouter();

//     console.log(isLoggedIn, "==isLoggedIn:withAuth");

//     // If user is not logged in, redirect to login page
//     if (!isLoggedIn) {
//       router.push("/signin");
//       return null; // Return null or a loading spinner until the redirect completes
//     }

//     // If user is logged in, return original component
//     return <Component {...props} />;
//   };

//   if (Component.getInitialProps) {
//     Auth.getInitialProps = Component.getInitialProps;
//   }

//   return Auth;
// };

// export default withAuth;
