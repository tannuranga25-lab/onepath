
import 'dotenv/config';
import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('OnePath backend is running');
    console.log(`http://localhost:${PORT}`);
});
