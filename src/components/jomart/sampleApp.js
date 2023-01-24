import React, { Component } from 'react';
// import './App.css';
import Tabs from "./components/TabNav-components/TabComponent/Tabs"
import BurgerMenu from "./components/BurgerMenu-components/BurgerMenu";
import Buttons from './components/Buttons/buttons';
import Grid from './components/Grid/Grid';
import MyForm from './components/Form/form';
import Card from './components/Card/card';
import Breadcrumb from './components/Breadcrumb/breadcrumb';
import ProgressBar from './components/ProgressBar/progressbar';
import ToggleSwitch from './components/ToggleSwitch/toggleswitch';
import SkeletonLoading from './components/SkeletonLoading/skeletonloading';
import {AvatarWithBadge} from './components/AvatarBadge/avatarwithbadge';
import Stepper from './components/Stepper/stepper';
import Table from './components/Table/table';
import Select from './components/Select/select';
import Radio from './components/Radio/radio';
import Checkbox from './components/Checkbox/checkbox';


//For Grid
const items = [
  {id: 1, content: <p>Item 1</p>},
  {id: 2, content: <p>Item 2</p>},
  {id: 3, content: <p>Item 3</p>},
  {id: 4, content: <p>Item 4</p>},
  {id: 5, content: <p>Item 5</p>},
  {id: 6, content: <p>Item 6</p>},
];

//For Card
const cardData = {
  imgUrl: 'https://via.placeholder.com/150',
  title: 'Card Title',
  description: 'Card Description',
  buttonUrl: '#',
  buttonText: 'Learn More',
};

//For Breadcrumb
const links = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
];

//For Stepper
const steps = [
  {title: "Step 1", content: <p>Step 1 content</p>},
  {title: "Step 2", content: <p>Step 2 content</p>},
  {title: "Step 3", content: <p>Step 3 content</p>},
];

//For Table
const data = [
  {id: 1, name: "John Doe", age: 30, occupation: "Developer"},
  {id: 2, name: "Jane Smith", age: 25, occupation: "Designer"},
  {id: 3, name: "Bob Johnson", age: 35, occupation: "Manager"},
];

//For Select, Radio, and Checkbox
const options1 = [
  {value: "option1", label: "Option 1"},
  {value: "option2", label: "Option 2"},
  {value: "option3", label: "Option 3"},
];
const options2 = [
  {value: "apple", label: "Apple"},
  {value: "biscuit", label: "Biscuit"},
  {value: "calamari", label: "Calamari"},
];

const options3 = [
  {value: "mercury", label: "Mercury"},
  {value: "venus", label: "Venus"},
  {value: "earth", label: "Earth"},
];

class App extends Component {

    render() {
        return (
        <>

        <div className='burger-menu'>
          <BurgerMenu />
        </div>
        <div className="tabs">
          <Tabs />
        </div>
        <div>
          <Buttons />
        </div>
        <div>
          <Grid items={items} />
        </div>
        <div>
          <MyForm />
        </div>
        <div>
          <Card {...cardData} />
        </div>
        <div>
          <Breadcrumb links={links} />
        </div>
        <div>
          <ProgressBar completion={50} />
        </div>
        <div>
          <ToggleSwitch isChecked={true} />
        </div>
        <div>
          <SkeletonLoading />
        </div>
        <div>
          <AvatarWithBadge 
            src="https://via.placeholder.com/150" 
            alt="Placeholder" 
            badgeText="New"
          />
        </div>
        <div>
          <Stepper steps={steps} />
        </div>
        <div>
          <Table data={data} />
        </div>
        <div>
          <Select options={options1} />
        </div>
        <div>
          <Radio options={options2} />
        </div>
        <div>
          <Checkbox options={options3} />
        </div>

        </>
        );
    }
}
export default App;