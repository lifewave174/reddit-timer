import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import GlobalStyle from './GlobalStyle';

import Header from './components/common/Header';
import Main from './components/common/Main';
import Search from './components/Search';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Footer from './components/common/Footer';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Router>
                    <Normalize />
                    <GlobalStyle />
                    <Header />
                    <Switch>
                        <Main>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/search">
                                <Search />
                            </Route>
                            <Route>
                                <NoMatch />
                            </Route>
                        </Main>
                    </Switch>
                    <Footer />
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
