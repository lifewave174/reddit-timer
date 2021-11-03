import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { MainWrapper } from './styling/sharedstyles';

import theme from './styling/theme';
import GlobalStyle from './styling/GlobalStyle';

import Header from './components/common/Header';
import Search from './components/Search';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Router>
                    <Normalize />
                    <GlobalStyle />
                    <Header />
                    <Switch>
                        <MainWrapper>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/search">
                                <Search />
                            </Route>
                            <Route>
                                <NoMatch />
                            </Route>
                        </MainWrapper>
                    </Switch>
                    <Footer />
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
