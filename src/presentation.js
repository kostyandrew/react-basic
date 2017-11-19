// Import React
import React from 'react';
import Prism from "prismjs";
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-bash.min';
// Import Spectacle Core tags
import {
	BlockQuote,
	Cite,
	Deck,
	Heading,
	ListItem,
	List,
	Quote,
	Slide,
	Text,
	Image
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import Welcome from "./code/Welcome";
import Counter from "./code/Counter";
import Input from "./code/Input";
import Workflow from "./code/Workflow/Parent";
import Children from "./code/Children.jsx";

// Require CSS
require('normalize.css');
const theme = createTheme(
	{
		primary: '#ffeb3b',
		secondary: '#1f2022',
		tertiary: '#1976d2',
		quartenary: '#cecece',
		white: "white"
	},
	{
		primary: 'Open Sans',
		secondary: 'Open Sans',
	}
);

require('./style.css');
require("prismjs/themes/prism.css");

const Code = (props) => {
	const lang = props.lang || "javascript";
	const codeHtml = Prism.highlight(props.code, Prism.languages[lang]);
	return <pre
		style={{
			marginTop: "1rem",
			fontSize: 20,
			padding: "0.5rem",
			lineHeight: 1.3,
			overflow: "auto",
			height: (props.height || "auto")
		}}
		className={"line-numbers language-" + lang}><code
		dangerouslySetInnerHTML={{ __html: codeHtml }}/></pre>;
}

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck
				transition={['zoom', 'slide']}
				transitionDuration={500}
				theme={theme}
			>
				<Slide transition={['zoom']} bgColor="primary">
					<Heading size={1} fit caps lineHeight={1} textColor="secondary">
						React Basics
					</Heading>
				</Slide>
				<Slide transition={['zoom']} bgColor="primary">
					<Heading size={1} fit caps lineHeight={1} textColor="secondary">
						Що таке React?
					</Heading>
				</Slide>
				<Slide transition={['zoom']} bgColor="primary" bgImage={require('./resources/reactive.jpg')} bgPosition="0% 25%"
							 bgDarken="0.3">
					<Heading size={1} fit caps lineHeight={1} textColor="white">
						Reactive programming?
					</Heading>
				</Slide>

				<Slide transition={['zoom']} bgColor="primary" bgImage={require('./resources/cucumber.jpg')}>
					<Heading size={1} fit caps lineHeight={1} textColor="white">
						Реактивний рух?
					</Heading>
				</Slide>

				<Slide transition={['zoom']} bgColor="primary">
					<Heading size={1} fit caps lineHeight={1} textColor="tertiary">
						Ядерні технології?
					</Heading>
					<Text>
						<Image src={require('./resources/nuclear.jpg')}/>
					</Text>
				</Slide>

				<Slide>
					<BlockQuote>
						<Quote textColor="secondary">React - Реагувати</Quote>
						<Cite>Google Translate</Cite>
					</BlockQuote>
				</Slide>

				<Slide bgColor="secondary">
					<Heading size={1} fit caps lineHeight={1} textColor="white">
						Virtual DOM
					</Heading>
				</Slide>

				<Slide bgColor="secondary">
					<Heading size={1} lineHeight={1} textColor="white">
						JSX
					</Heading>
					<br/>
					<Code
						lang="jsx"
						code={require("!raw-loader!./code/jsx.example")}
					/>
				</Slide>
				<Slide bgColor="secondary">
					<Heading size={1} lineHeight={1} textColor="white">
						Arrays
					</Heading>
					<br/>
					<Code
						lang="jsx"
						code={require("!raw-loader!./code/jsx2.example")}
					/>
				</Slide>
				<Slide bgColor="secondary">
					<Heading size={1} lineHeight={1} textColor="white">
						React.Fragment
					</Heading>
					<br/>
					<Code
						lang="jsx"
						code={require("!raw-loader!./code/jsxFragments.example")}
					/>
				</Slide>
				<Slide bgColor="secondary">
					<Heading size={1} lineHeight={1} textColor="white">
						Як працює JSX
					</Heading>
					<br/>
					<Code
						lang="jsx"
						code={require("!raw-loader!./code/jsxElement.example")}
					/>
				</Slide>
				<Slide bgColor="secondary">
					<Heading size={1} lineHeight={1} textColor="white">
						JSX Props
					</Heading>
					<br/>
					<Code
						lang="jsx"
						code={require("!raw-loader!./code/jsxProps.example")}
					/>
				</Slide>
				<Slide bgColor="secondary">
					<Heading size={1} lineHeight={1} textColor="white">
						React Components
					</Heading>
				</Slide>

				<Slide bgColor="secondary">
					<Heading size={1} lineHeight={1} textColor="white">
						Function Component
					</Heading>
					<br/>
					<Code
						lang="jsx"
						code={require("!raw-loader!./code/Welcome.jsx")}
					/>
					<Text textColor="white">
						<Code
							lang="jsx"
							code='<Welcome name={"Donald"}/>'
						/>
						<Welcome name={"Donald"}/>
					</Text>
				</Slide>

				<Slide bgColor="secondary">
					<Heading size={1} lineHeight={1} textColor="white">
						Props.Children
					</Heading>
					<br/>
					<Code
						lang="jsx"
						code={require("!raw-loader!./code/Children.jsx")}
					/>
					<Text textColor="white">
						<Code
							lang="jsx"
							code="<Children><i>Donald</i></Children>"
						/>
						<Children><i>Donald</i></Children>
					</Text>
				</Slide>

				<Slide bgColor="secondary">
					<Heading size={1} lineHeight={1} textColor="white">
						Class Component
					</Heading>
					<br/>
					<Code
						lang="jsx"
						height="50vh"
						code={require("!raw-loader!./code/Counter.jsx")}
					/>
				</Slide>

				<Slide bgColor="secondary">
					<Text textColor="white">
						<Code
							lang="jsx"
							code="<Counter/>"
						/>
						<Counter/>
						<br/>
						<Code
							lang="jsx"
							code="<Counter startCounter={3}/>"
						/>
						<Counter startCounter={3}/>
						<br/>
						<Code
							lang="jsx"
							code="<Counter startCounter={-2}/>"
						/>
						<Counter startCounter={-2}/>
					</Text>
				</Slide>

				<Slide bgColor="secondary">
					<Heading size={1} lineHeight={1} textColor="white">
						Робота з полями
					</Heading>
					<br/>
					<Code
						lang="jsx"
						height="40vh"
						code={require("!raw-loader!./code/Input.jsx")}
					/>
					<input type="text" value={"Default Value"} onChange={() => false}/>
					<Input value={"Default Value"}/>
				</Slide>
				<Slide bgColor="primary">
					<Heading size={1} lineHeight={1} textColor="secondary">
						Життєвий цикл компонент
					</Heading>
				</Slide>
				<Slide bgColor="primary">
					<Heading size={1} lineHeight={1} textColor="secondary">
						Монтування
					</Heading>
					<List>
						<ListItem>constructor()</ListItem>
						<ListItem>componentWillMount()</ListItem>
						<ListItem>render()</ListItem>
						<ListItem>componentDidMount()</ListItem>
					</List>
				</Slide>
				<Slide bgColor="primary">
					<Heading size={1} lineHeight={1} textColor="secondary">
						Оновлення
					</Heading>
					<List>
						<ListItem>componentWillReceiveProps()</ListItem>
						<ListItem>shouldComponentUpdate()</ListItem>
						<ListItem>componentWillUpdate()</ListItem>
						<ListItem>render()</ListItem>
						<ListItem>componentDidUpdate()</ListItem>
					</List>
				</Slide>
				<Slide bgColor="primary">
					<Heading size={1} lineHeight={1} textColor="secondary">
						Розмонтування та помилки
					</Heading>
					<List>
						<ListItem>componentWillUnmount()</ListItem>
						<ListItem>componentDidCatch()</ListItem>
					</List>
				</Slide>
				<Slide bgColor="secondary">
					<Heading size={1} lineHeight={1.2} textColor="primary">
						One way data workflow
					</Heading>
				</Slide>

				<Slide bgColor="secondary">
					<Code
						lang="jsx"
						height="60vh"
						code={require("!raw-loader!./code/Workflow/Parent.jsx")}
					/>
				</Slide>
				<Slide bgColor="secondary">
					<Code
						lang="jsx"
						code={require("!raw-loader!./code/Workflow/Input.jsx")}
					/>
				</Slide>
				<Slide bgColor="secondary">
					<Code
						lang="jsx"
						height="60vh"
						code={require("!raw-loader!./code/Workflow/Name.jsx")}
					/>
				</Slide>
				<Slide bgColor="primary">
					<Workflow/>
				</Slide>

				<Slide bgColor="primary">
					<Heading size={1} lineHeight={1} textColor="secondary">
						ReactDOM
					</Heading>
					<br/>
					<Code
						lang="jsx"
						code={require("!raw-loader!./code/Render.js")}
					/>
				</Slide>
				<Slide bgColor="primary">
					<Heading size={1} style={{ fontSize: "3rem" }} lineHeight={1} textColor="secondary">
						React + Classes + JSX
					</Heading>
					<br />
					<Heading size={1} style={{ fontSize: "3rem" }} lineHeight={1} textColor="secondary">
						+ Babel + Webpack
					</Heading>
					<br />
					<Heading size={1} style={{ fontSize: "5rem" }} lineHeight={1} textColor="secondary">
						= Create React App
					</Heading>
					<br />
					<Code
						lang="bash"
						code="npm i create-react-app -G"
					/>
					<Code
						lang="bash"
						code="create-react-app my-app"
					/>
				</Slide>
			</Deck>
		);
	}
}