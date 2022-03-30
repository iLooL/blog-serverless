import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Account } from './Components/User/Account';
import { PostsProvider } from './Components/PostsContext';

import CssBaseline from '@mui/material/CssBaseline';
import ButtonAppBar from './Components/Appbar/ButtonAppBar';
import NewPost from './Components/Posts/NewPost';
import ViewPost from './Components/Posts/ViewPost';
import SignUp from './Components/Registration/SignUp';
import Login from './Components/Registration/Login';
import Home from './Components/Home';

// import { styles } from './Components/Posts/PostStyles';

const App = () => {

    return(
        <BrowserRouter>
            <Account>
                <PostsProvider>
                    <CssBaseline />
                    <div>
                        <ButtonAppBar />
                        <Routes>
                            <Route path="/" element={ <Home /> } />
                            <Route path="/newPost" element={ <NewPost /> } />
                            <Route path="/blog/:postId" element={ <ViewPost /> } />
                            <Route path="/login" element={ <Login /> } />
                            <Route path="/register" element={ <SignUp /> } />
                        </Routes>
                    </div>
                </PostsProvider>
            </Account >
        </BrowserRouter>
    )
}

export default App;