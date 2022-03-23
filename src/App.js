import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { Account } from './Components/User/Account';

import ButtonAppBar from './Components/Appbar/ButtonAppBar';
import NewPost from './Components/Posts/NewPost';
import ViewPost from './Components/Posts/ViewPost';
import SignUp from './Components/Registration/SignUp';
import Login from './Components/Registration/Login';
import Home from './Components/Home';
import DisplayPosts from './Components/Posts/DisplayPosts';

import { PostsProvider } from './Components/PostsContext';

const App = () => {

    return(
        <BrowserRouter>
            <Account>
                <PostsProvider>
                    <ButtonAppBar />
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                        <Route path="/newPost" element={ <NewPost /> } />
                        <Route path="/blog/:postId" element={ <ViewPost /> } />
                        <Route path="/login" element={ <Login /> } />
                        <Route path="/register" element={ <SignUp /> } />
                    </Routes>
                </PostsProvider>
            </Account >
        </BrowserRouter>
    )
}

export default App;