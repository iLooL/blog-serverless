import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ButtonAppBar from './Appbar/ButtonAppBar';
import NewPost from './Posts/NewPost';
import ViewPost from './Posts/ViewPost';
import SignUp from './Registration/SignUp';
import Login from './Registration/Login';

const Test = () => {
    return(
        <BrowserRouter>
            <Routes>
                  <Route path="/newPost" element={ <NewPost /> } />
                  <Route path="/blog/:postId" element={ <ViewPost /> } />
                  <Route path="/login" element={ <Login /> } />
                  <Route path="/register" element={ <SignUp /> } />
                  <Route path="/test" element={ <Test /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Test;