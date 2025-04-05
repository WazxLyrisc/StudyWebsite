let currentPlanetIndex = 0;
        let planets = [];

        // Fetch dữ liệu từ API khi trang được tải
        window.addEventListener("load", () => {
            fetch("https://handlers.education.launchcode.org/static/planets.json")
                .then(response => response.json())
                .then(data => {
                    planets = data; // Lưu dữ liệu vào mảng planets
                })
                .catch(error => console.error("Error fetching planets:", error));
        });

        // Xử lý khi người dùng nhấn nút "Fetch Next Planet"
        document.getElementById("fetch-planet").addEventListener("click", () => {
            if (planets.length > 0) {
                // Lấy hành tinh tiếp theo
                const planet = planets[currentPlanetIndex];
                document.getElementById("planet-name").textContent = planet.name;
                document.getElementById("planet-image").src = planet.image;

                // Chuyển đến hành tinh tiếp theo (hoặc quay lại đầu danh sách)
                currentPlanetIndex = (currentPlanetIndex + 1) % planets.length;
            } else {
                alert("Planet data not loaded yet. Please try again.");
            }
        });