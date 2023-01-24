import './buttons.css';

function Buttons() {

  function sayHello(){
    alert('Oh! You click the button.')
  }

  function styledbtn(){
    alert("You've clicked a styled button.")
  }

  return (
    <>
    <h2>Button with Alert text.</h2>
    <button onClick={sayHello}>Button</button>

    <h2> Styled Button </h2>
    <button onClick={styledbtn} id="styledbtn"> Styled </button>

    <h2> Button with Link and Redirect. </h2>
    <a href='http://localhost:3000/' rel='noreferrer' target="_blank">
      <button> Link </button>
    </a>
    </>
  );
}

export default Buttons;
