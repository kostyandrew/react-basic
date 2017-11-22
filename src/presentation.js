// Import React
import React from 'react';
// import Prism from "prismjs";
// import 'prismjs/components/prism-jsx.min';
// import 'prismjs/components/prism-bash.min';;
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
	Image,
	Link,
	CodePane,
	Appear
} from 'spectacle';
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-jsx'

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import Form from "./code/Form";
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

require("prismjs/themes/prism-coy.css");
require('./style.css');

const Code = (props) => (
	<CodePane
		theme="light"
		lang={props.lang}
		source={props.code}
		style={{
			marginTop: "1rem",
			height: (props.height || "auto"),
			padding: "0.5rem",
			lineHeight: 1.2,
			fontSize: "20"
		}}
	/>
);

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck
				transition={['slide']}
				transitionDuration={500}
				theme={theme}
			>
				<Slide bgColor="primary">

					<br/>
					<Heading size={1} caps lineHeight={"30vh"} textColor="secondary" style={{ fontSize: 70 }}>
						<Image display="inline-block" src={require("./resources/logo.svg")} height="30vh"
									 style={{ verticalAlign: "bottom", margin: 0 }}/> React Basics
					</Heading>
					<Text textColor="secondary"
								style={{ marginTop: "20vh", textAlign: "left", fontSize: "3.5vh", lineHeight: "8vh" }}>
						<Image height="16vh" src={require("./resources/me.jpg")} display="inline-block"
									 style={{ verticalAlign: "bottom", margin: 0, float: 'left', marginRight: "2rem" }}/>
						<span>Andrii Kostetskyi</span>
						<br/>
						<span>Fullstack Developer in <i>ASD</i>, NodeSchool Chernivtsi</span>
					</Text>
				</Slide>
				<Slide bgColor="primary">
					<Image src={require("./resources/facebook.png")} height="30vh"/>
				</Slide>
				<Slide bgColor="secondary">
					<Heading size={1} fit caps lineHeight={1} textColor="primary">
						Що таке React?
					</Heading>
				</Slide>
				<Slide bgColor="primary" bgImage={require('./resources/reactive.jpg')} bgPosition="0% 25%"
							 bgDarken="0.3">
					<Heading size={1} fit caps lineHeight={1} textColor="white">
						Reactive programming?
					</Heading>
				</Slide>

				<Slide bgColor="primary" bgImage={require('./resources/cucumber.jpg')}>
					<Heading size={1} fit caps lineHeight={1} textColor="white">
						Реактивний рух?
					</Heading>
				</Slide>

				<Slide bgColor="primary">
					<Heading size={1} fit caps lineHeight={1} textColor="secondary">
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
						Functional Component
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
				</Slide>
				<Slide bgColor="secondary">
					<Code
						lang="jsx"
						height="60vh"
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

				<Slide bgColor="secondary">
					<Heading size={1} lineHeight={1} textColor="white">
						Форми
					</Heading>
				</Slide>

				<Slide bgColor="secondary">
					<Code
						lang="jsx"
						height="40vh"
						code={require("!raw-loader!./code/Form.jsx")}
					/>
					<Text textColor="white">
						<Form/>
					</Text>
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
					<br/>
					<Appear order={1}>
						<Heading size={1} style={{ fontSize: "3rem" }} lineHeight={1} textColor="secondary">
							+ Babel + Webpack
						</Heading>
					</Appear>

					<br/>

					<Appear order={2}>
						<Heading size={1} style={{ fontSize: "5rem" }} lineHeight={1} textColor="secondary">
							= <Link href="https://github.com/facebookincubator/create-react-app" textColor="tertiary">Create React
							App</Link>
						</Heading>
					</Appear>
					<br/>
					<Appear order={3}>
						<Text>
							<Code
								lang="bash"
								code="npm i create-react-app -G"
							/>
							<Code
								lang="bash"
								code="create-react-app my-app"
							/>
						</Text>
					</Appear>
				</Slide>

				<Slide bgColor="white">
					<Text textColor="secondary">
						<Heading size={1} style={{ fontSize: "3rem" }} lineHeight={1} textColor="secondary">
							Документація та гайди
						</Heading>
						<br/>
						<Link href="https://reactjs.org/" textColor="tertiary">reactjs.org</Link>
					</Text>
				</Slide>

				<Slide bgColor="secondary">
					<Heading size={1} style={{ fontSize: "3rem" }} lineHeight={1} textColor="secondary">
						<Link href="https://github.com/facebook/react-devtools" textColor="tertiary">React Dev Tools</Link>
					</Heading>
					<br/>

					<Image src={require("./resources/devtools.jpg")}/>
				</Slide>

				<Slide bgColor="white">
					<Image src={require("./resources/dan.jpg")} height={"50vh"}/>
					<Heading size={1} style={{ fontSize: "5rem" }} lineHeight={1} textColor="secondary">
						Dan Abramov
					</Heading>
					<br/>
					<Link href="https://twitter.com/dan_abramov" textColor="tertiary">Twitter: @dan_abramov</Link>
					<br/>
					<Link href="https://github.com/gaearon" textColor="tertiary">Github: @gaearon</Link>
				</Slide>

				<Slide bgColor="white">
					<Image src={require("./resources/akulov.jpg")} height={"50vh"}/>
					<Heading size={1} style={{ fontSize: "5rem" }} lineHeight={1} textColor="secondary">
						Ivan Akulov
					</Heading>
					<br/>
					<Link href="https://twitter.com/iamakulov" textColor="tertiary">Twitter: @iamakulov</Link>
					<br/>
					<Link href="https://telegram.me/iamakulov_channel" textColor="tertiary">Telegram канал</Link>
					<br/>
					<Link href="https://iamakulov.com/" textColor="tertiary">Блог</Link>
				</Slide>

				<Slide bgColor="white">
					<Image src={require("./resources/me.jpg")} height={"50vh"}/>
					<Heading size={1} style={{ fontSize: "5rem" }} lineHeight={1} textColor="secondary">
						Andrii Kostetskyi
					</Heading>
					<Text>@kostyandrew</Text>
					<Link href="https://telegram.me/kostyandrew" textColor="tertiary">Telegram</Link>
					{" | "}
					<Link href="https://github.com/kostyandrew" textColor="tertiary">Github</Link>
				</Slide>

				<Slide bgColor="white">
					<Image src={require("./resources/slides.png")} height={"50vh"}/>
					<Text textColor="secondary">
						<Link href="https://kostyandrew.github.io/react-basic/" textColor="tertiary">kostyandrew.github.io/react-basic/</Link>
					</Text>
				</Slide>

				<Slide bgColor="white">
					<Image src={require("./resources/hw.png")} height={"50vh"}/>
					<Text textColor="secondary">
						<Link href="https://github.com/kottans/chernivtsi-frontend-2017/tree/master/homeworks/react-basic"
									textColor="tertiary">kottans/chernivtsi-frontend-2017/homeworks/react-basic</Link>
					</Text>
				</Slide>
				<Slide bgColor="primary">
					<Heading size={1} fit caps style={{ fontFamily: "Times New Roman" }} textColor="secondary">Fin</Heading>
				</Slide>
			</Deck>
		);
	}
}