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
        <li>Về chúng tôi</li>
        <div class="logo-footer">
            <img src="../img/logo.png" alt="">
        </div>
        <li><i class="fa fa-map-marker" aria-hidden="true"></i> Địa chỉ:</li>
        <li><i class="fa fa-mobile" aria-hidden="true"></i> <a href="tel:">Số điện thoại:</a></li>
        <li><i class="fa fa-envelope-o" aria-hidden="true"></i> <a href="mailto:">Email:</a></li>
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
    `)
}
const Footer = document.querySelector('#footer');
Footer.innerHTML = footer();