import React from "react";
import AuthContexProvider from "./contex/AuthContexProvider";
import Register from "./pages/Register";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      <AuthContexProvider>
     <AppRouter/>
     </AuthContexProvider>
    </div>
  );
};

export default App;
