import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='container mt-3'>
            <h4>Difference between authorization and authentication</h4>
            <p className='text-left'>Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process. In some instances, systems require the successful verification of more than one factor before granting access. This multi-factor authentication (MFA) requirement is often deployed to increase security beyond what passwords alone can provide.</p>
            <p>Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.

            Giving someone permission to download a particular file on a server or providing individual users with administrative access to an application are good examples of authorization.

            In secure environments, authorization must always follow authentication. Users should first prove that their identities are genuine before an organization’s administrators grant them access to the requested resources.</p>
        </div>
        <div className='container'>
            <h4>Why are we using firebase? What other options do you have to implement authentication?</h4>
            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            <p>Authentication factors can be classified into three groups: something you know: a password or personal identification number (PIN); something you have: a token, such as bank card; something you are: biometrics, such as fingerprints and voice recognition.</p>
        </div>
        <div className='container'>
            <h4>Why other services does firebase provide other than authentication?</h4>
            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
            Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.
            </p>
        </div>
        </div>
    );
};

export default Blogs;