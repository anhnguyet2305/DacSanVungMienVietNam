const footer = () =>{
    return (`
<!--    <div class="subcribe">-->
<!--    <p>Đăng ký nhận tin</p>-->
<!--    <form action="" method="GET">-->
<!--        <input class="form-control width-control" type="email" placeholder="Nhập địa chỉ Email" require maxlength="50">-->
<!--        <input type="submit" class="form-control submit" value="Đăng ký"><br>-->
<!--    </form>-->
<!--</div>-->
<footer>
    <ul class="ul-1">
        <h5> Đặc Sản Vùng Miền Việt Nam</h5>
        <div class="logo-footer">
            <img style="border-radius: 10px" src="../img/logo_gif_header.gif" alt="">
        </div>
        <li><i class="fal fa-map-marker-alt" aria-hidden="true"></i></i> Địa chỉ: 52 Văn Trì, P.Minh Khai, Nam Từ Liêm, Hà Nội</li>
        <li><i class="far fa-mobile" aria-hidden="true"></i> <a href="tel:">Số điện thoại: 091 621 86 66</a></li>
        <li><i class="fal fa-envelope" aria-hidden="true"></i> <a href="mailto:dieplong.jsc@gmail.com">Email: dieplong.jsc@gmail.com</a></li>
    </ul>
    <ul class="ul-2">
        <li>Tìm hiểu thêm <i class="fa fa-angle-down" aria-hidden="true"></i></li>
        <div class="wrap-ul">
            <li><a href="">Giới thiệu</a></li>
            <li><a href="">Chương trình khuyến mãi</a></li>
            <li><a href="">Hệ thống cửa hàng</a></li>
            <li><a href="">Hướng dẫn đặt hàng</a></li>
            <li><a href="">Hướng dẫn kiểm tra đơn hàng</a></li>
        </div>
    </ul>
    <ul class="ul-3">
        <li>Hỗ trợ khách hàng <i class="fa fa-angle-down" aria-hidden="true"></i></li>
        <div class="wrap-ul">
            <li><a href="">Thông tin liên hệ</a></li>
            <li><a href="">Chính sách giao hàng</a></li>
            <li><a href="">Chính sách đổi hàng</a></li>
            <li><a href="">Hướng dẫn đổi hàng</a></li>
            <li><a href="">Chính sách bảo mật</a></li>
            <li><a href="">Điều khoản dịch vụ</a></li>
        </div>
    </ul>
    <ul>
        <li>Theo dõi chúng tôi</li>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDSVMVN&tabs=timeline&width=340&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="160" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </ul>
</footer>
<div class="messenger">
    <!-- Messenger Plugin chat Code -->
    <div id="fb-root"></div>

    <!-- Your Plugin chat code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "306411133456529");
        chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    <!-- Your SDK code -->
    <script>
        window.fbAsyncInit = function() {
            FB.init({
                xfbml            : true,
                version          : 'v12.0'
            });
        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
</div>
    `)
}
const Footer = document.querySelector('#footer');
Footer.innerHTML = footer();