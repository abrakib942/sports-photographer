import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <h2 className="text-center text-primary my-5">Questions and Answers</h2>

      <h4 className="text-info">
        1. Difference between Authorization and Authentication
      </h4>
      <p>
        {" "}
        Authentication is the process of verifying who someone is, whereas
        authorization is the process of verifying what specific applications,
        files, and data a user has access to. The situation is like that of an
        airline that needs to determine which people can come on board. The
        first step is to confirm the identity of a passenger to make sure they
        are who they say they are. Once a passenger's identity has been
        determined, the second step is verifying any special services the
        passenger has access to, whether it's flying first-class or visiting the
        VIP lounge.In the digital world, authentication and authorization
        accomplish these same goals. Authentication is used to verify that users
        really are who they represent themselves to be. Once this has been
        confirmed, authorization is then used to grant the user permission to
        access different levels of information and perform specific functions,
        depending on the rules established for different types of users.
      </p>

      <h4 className="text-info">
        2. Why are you using firebase? What other options do you have to
        implement authentication?
      </h4>
      <p>
        Firebase Authentication provides backend services, easy-to-use SDKs, and
        ready-made UI libraries to authenticate users to your app. It supports
        authentication using passwords, phone numbers, popular federated
        identity providers like Google, Facebook and Twitter, and more.
        Authentication factors can be classified into three groups: something
        you know: a password or personal identification number (PIN); something
        you have: a token, such as bank card; something you are: biometrics,
        such as fingerprints and voice recognition.
      </p>

      <h4 className="text-info">
        3. What other services does firebase provide other than authentication?
      </h4>
      <p>
        There are many services which Firebase provides, Most useful of them
        are: * Cloud Firestore <br /> * Cloud Functions <br /> * Hosting <br />{" "}
        * Cloud Storage <br /> * Google Analytics <br /> * Predictions <br /> *
        Cloud Messaging <br /> * Dynamic Links
        <br /> * Remote Config
      </p>
    </div>
  );
};

export default Blog;
