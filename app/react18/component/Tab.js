export default function Tab(props){
    const {title, onClick, active} =props;
    return(
        <li class="me-2">
            <a href="#" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Profile</a>
        </li>
    )

}