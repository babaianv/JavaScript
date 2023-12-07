const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <div>
//         <div>
//         <h1>Hello World</h1>
//         </div>
//         <p>Hello from paragraph</p>
//     </div>
// )


//or в качестве параметра для метода рендер, может попасть только 1 корневой тег (или фрагмент)

root.render(
    <>
        <div>
        <h1>Hello World</h1>
        </div>
        <p>Hello from paragraph</p>
    </>
);
