        let currentPage = 1;
        const pages = document.querySelectorAll('.content-page');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        function updatePage() {
            pages.forEach((page, index) => {
                if (index + 1 === currentPage) {
                    page.style.display = 'block';
                } else {
                    page.style.display = 'none';
                }
            });
        }

        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                updatePage();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentPage < pages.length) {
                currentPage++;
                updatePage();
            }
        });

        // Initialize the first page
        updatePage();