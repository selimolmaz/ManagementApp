import styles from "./HomePage.module.css"
import logo from "./logo.svg";
import BasicTable from "../../components/table/Table";
import MenuList from "../../components/menu/list/MenuList";

function HomePage() {
    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number
    ) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
        createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
        createData("Eclair", 262, 16.0, 24, 6.0),
        createData("Cupcake", 305, 3.7, 67, 4.3),
        createData("Gingerbread", 356, 16.0, 49, 3.9),
    ];

    return (
        <div>
            <div class={styles.bar}>
                <img class={styles.logo} src={logo} alt="logo" />
            </div>
            <div class={styles.wrapper}>
                <div class={styles.treeMenu}>
                    <MenuList />
                </div>
                <div class={styles.content}>
                    <BasicTable rows={rows} />
                </div>
            </div>
        </div>
    )
}
export default HomePage;