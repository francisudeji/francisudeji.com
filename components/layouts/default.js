import React from 'react';
// import Header from '../header'
// import Footer from '../footer'
// import Container from '../container'

function Layout(props) {
  // console.log(props)
  return (
    <div>
      <header
      // path={props.path}
      // pageTitle={props.pageTitle}
      // ogImage={props.ogImage}
      />

      <main>{props.children}</main>

      <footer />
    </div>
  );
}

export default Layout;
