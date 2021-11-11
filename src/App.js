import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { MainWrapper } from './styling/sharedstyles';

import theme from './styling/theme';
import GlobalStyle from './styling/GlobalStyle';

import Header from './components/common/Header';
import SearchPage from './components/SearchPage/SearchPage';
import Home from './components/Home';
import NoMatch from './components/common/NoMatch';
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
                        <MainWrapper>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/search/:subreddit">
                                <SearchPage />
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
