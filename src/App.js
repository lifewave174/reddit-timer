import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import GlobalStyle from './GlobalStyle';

import Header from './components/Header';
import Search from './components/Search';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Router>
                    <Normalize />
                    <GlobalStyle />
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/search">
                            <Search />
                        </Route>
                        <Route>
                            <NoMatch />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
