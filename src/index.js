import './styles.css';
import menu from './modules/menu';

function importAll(r) {
    r.keys().forEach(r);
}
importAll(require.context('/src/images', false, /\.(png|svg|jpg|jpeg|gif)$/));

menu.select();
