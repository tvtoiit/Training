// script.ts
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetTab = button.getAttribute("data-tab");

            // Loại bỏ lớp 'active' từ tất cả các nút
            tabButtons.forEach(btn => btn.classList.remove("active"));
            // Thêm lớp 'active' vào nút được nhấn
            button.classList.add("active");

            // Ẩn tất cả nội dung tab
            tabContents.forEach(content => {
                (content as HTMLElement).style.display = "none";
            });

            // Hiển thị nội dung tab được chọn
            const targetContent = document.getElementById(`tab-${targetTab}`);
            if (targetContent) {
                targetContent.style.display = "block";
            }
        });
    });
});
