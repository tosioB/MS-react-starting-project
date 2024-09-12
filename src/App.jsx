import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data';
console.log(CORE_CONCEPTS)

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.CORE_CONCEPTS.image} alt={props.CORE_CONCEPTS.title} />
      <h3>{props.CORE_CONCEPTS.title}</h3>
      <p>{props.CORE_CONCEPTS.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item, index) => {
              return <CoreConcept key={index} CORE_CONCEPTS={item}  />
            })}
            {/* <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            /> */}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
