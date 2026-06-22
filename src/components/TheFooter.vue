<template>
    <!-- FOOTER -->
    <footer>
        <div class="footer-container">
            <div class="footer-col">
                <h3>Về VietFly</h3>
                <p>
                    Hệ thống đặt vé máy bay trực tuyến hiện đại, kết nối các hãng hàng không nội địa và quốc
                    tế.
                </p>
                <p>📍 95 Lĩnh Nam, Hoàng Mai, Hà Nội</p>
                <p>✉️ support@vietfly.vn</p>
            </div>
            <div class="footer-col">
                <h3>Chính sách</h3>
                <ul class="footer-links">
                    <li><a href="#">Điều khoản sử dụng</a></li>
                    <li><a href="#">Bảo mật thông tin</a></li>
                    <li><a href="#">Đổi / Hoàn vé</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>Hỗ trợ</h3>
                <ul class="footer-links">
                    <li><a href="#">Hướng dẫn đặt vé</a></li>
                    <li><a href="#">Check-in Online</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>Đối tác</h3>
                <p>• Vietnam Airlines</p>
                <p>• Vietjet Air</p>
                <p>• Bamboo Airways</p>
                <p>• Pacific Airlines</p>
            </div>
        </div>
        <div class="copyright">© 2026 VietFly Airlines. All rights reserved.</div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
/* ==========================================================================
           5. FOOTER
           ========================================================================== */

footer {
    margin-top: 80px;

    background: #0f172a;
    color: rgba(255, 255, 255, 0.8);

    padding: 60px 20px 20px;
}

.footer-container {
    max-width: 1200px;
    margin: auto;

    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;

    padding-bottom: 40px;

    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-col h3 {
    color: var(--white);

    margin-bottom: 18px;

    font-size: 18px;
}

.footer-col p,
.footer-links li {
    margin-bottom: 12px;
    font-size: 14px;
}

.footer-links a:hover {
    color: var(--primary);
}

.copyright {
    text-align: center;
    padding-top: 20px;

    font-size: 13px;

    opacity: 0.6;
}
</style>