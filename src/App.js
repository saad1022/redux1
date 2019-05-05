import React from "react";
import { View } from "react-native";
//Redux specific
import { Provider } from "react-redux";
import { createStore } from "redux";
//Get Reducers
import reducers from "./reducers";
//Get the Header Component
import { Header } from "./Components/common";

import LibraryList from "./Components/LibraryList";
// import LibraryList from "./components/LibraryList";

const App = () => {
return (
// Provider can only have one child component
<Provider store={createStore(reducers)}>
<View style={{ flex: 1 }}>
<Header headerText="Redux Demo -- Tech Stack" />
{<LibraryList />}
</View>
</Provider>
);
};

export default App;