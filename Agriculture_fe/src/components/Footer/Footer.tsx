export default function Footer() {
  return (
    <footer className='bg-neutral-100 py-16'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          <div className='lg:col-span-1'>
            <div>©2022 GiangSon. Tất cả các quyền được bảo lưu.</div>
          </div>
          <div className='lg:col-span-2'>
            <div>
              Quốc gia & Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam Philippines Brazil México
              Colombia Chile Poland
            </div>
          </div>
        </div>
        <div className='mt-10 text-center text-sm'>
          <div>Công ty TNHH GiangSon</div>
          <div className='mt-6'>
            Địa chỉ: 371 Nguyễn Kiệm, Phường 13, Quận Gò Vấp, Thành Phố Hồ Chí Minh, Việt Nam . Tổng đài hỗ trợ:
            19001221 - Email: cskh@hotro.giangson.vn
          </div>
          <div className='mt-2'>Chịu Trách Nhiệm Quản Lý Nội Dung: Đỗ Công Sơn - Điện thoại liên hệ: 098 5355181</div>
          <div className='mt-2'>
            Mã số doanh nghiệp: 0909090909 do Sở Kế hoạch & Đầu tư TP HCM cấp lần đầu ngày 23/03/2015
          </div>
          <div className='mt-2'>©2015 - Bản quyền thuộc về Công ty TNHH GiangSon</div>
        </div>
      </div>
    </footer>
  )
}
