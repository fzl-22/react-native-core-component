import React, { createRef, useState } from "react";
import { View, StatusBar, DrawerLayoutAndroid } from "react-native";
import Article from "./screens/Article";
import Header from "./components/Header";
import Button from "./components/Button";
import List from "./screens/List";
import Separator from "./components/Separator";

const App = () => {
  const [page, setPage] = useState("List");
  const drawer = createRef();

  const changePage = (drawer, pageName) => {
    drawer.current.closeDrawer();
    setPage(pageName);
  };

  const NavigationView = (props) => (
    <View style={{ padding: 30, backgroundColor: "#222222", flex: 1 }}>
      <Button text="List" onPress={() => changePage(props.drawer, "List")} />
      <Separator height={30} />
      <Button
        text="Article"
        onPress={() => changePage(props.drawer, "Article")}
      />
      <Separator height={30} />
      <Button text="Close" onPress={() => props.drawer.current.closeDrawer()} />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => <NavigationView drawer={drawer} />}
    >
      <View style={{ paddingTop: 0 }}>
        <StatusBar style="auto" backgroundColor="#AA0002" />
        <Header drawer={drawer} />
        {page == "List" && <List />}
        {page == "Article" && <Article />}
      </View>
    </DrawerLayoutAndroid>
  );
};

export default App;
