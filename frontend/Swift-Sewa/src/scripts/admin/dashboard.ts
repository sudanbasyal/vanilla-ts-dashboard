export class AdminDashboardActions {
    static adminDashboard: () => void = async () => {
        const closeButton = document.getElementById('closeButton') as HTMLButtonElement;
        const hamburgerMenu = document.getElementById('hamburgerMenu') as HTMLButtonElement;

        closeButton.onclick = () => toggleSidebar();
        hamburgerMenu.onclick = () => toggleSidebar();

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar') as HTMLElement;
            sidebar.classList.toggle('-translate-x-full');
        }

        function loadPage(page: string) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', page, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    document.getElementById('mainContent')!.innerHTML = xhr.responseText;
                }
            };
            xhr.send();
        }

        // Load default page on DOMContentLoaded
        document.addEventListener('DOMContentLoaded', function() {
            loadPage('/views/admin/services.html');
        });

        // Add event listeners to navigation links
        const navLinks = document.querySelectorAll('#sidebar a');
        navLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const page = (event.target as HTMLAnchorElement).getAttribute('href')!;
                loadPage(page);
            });
        });
    };
}
