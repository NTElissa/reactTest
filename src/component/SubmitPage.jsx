import React from 'react';

function Submit() {
  const submitNow = (event) => {
    event.preventDefault();
    alert('Finish to submit');
    window.location.href = 'https://codefrontend.com/reactjs-redirect-to-url/#:~:text=Navigating%20to%20an%20external%20page%20in%20React&text=To%20navigate%20to%20another%20page,active%20URL%20to%20navigate%20window.'; 
  };

  return (
    <form>
      <div>
        <input type="text" defaultValue="email" /> <br />
        <input type="password" defaultValue="password" />
      </div>

      <div>
        <input type="submit" value="SUBMIT" onClick={submitNow} />
      </div>
    </form>
  );
}

export default Submit;
