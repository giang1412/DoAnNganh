import Button from 'src/components/Button'

export default function Cart() {
  return (
    <div className='bg-neutral-100 py-16'>
      <div className='container'>
        <div className='overflow-auto'>
          <div className='min-w-[1000px]'>
            <div className='grid grid-cols-12 rounded-sm bg-white py-5 px-9 text-sm capitalize text-gray-500 shadow'>
              <div className='col-span-6'>
                <div className='flex items-center'>
                  <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                    <input type='checkbox' className='h-5 w-5 accent-orange' />
                  </div>
                  <div className='flex-grow text-black'>Sản phẩm</div>
                </div>
              </div>
              <div className='col-span-6'>
                <div className='grid grid-cols-5 text-center'>
                  <div className='col-span-2'>Đơn giá</div>
                  <div className='col-span-1'>Số lượng</div>
                  <div className='col-span-1'>Số tiền</div>
                  <div className='col-span-1'>Thao tác</div>
                </div>
              </div>
            </div>
            <div className='my-3 rounded-sm bg-white p-5 shadow'>
              <div className='mb-5 grid grid-cols-12 rounded-sm border border-gray-200 bg-white py-5 px-4 text-center text-sm text-gray-500 first:mt-0'>
                <div className='col-span-6'>
                  <div className='flex'>
                    <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                      <input type='checkbox' className='h-5 w-5 accent-orange' />
                    </div>
                    <div className='flex-grow'>
                      <div className='flex'>
                        <button
                          className='h-20 w-20 flex-shrink-0'
                          // to={`${path.home}${generateNameId({
                          //   name: purchase.product.name,
                          //   id: purchase.product._id
                          // })}`}
                        >
                          <img
                            src='https://res.cloudinary.com/da7tpv6qw/image/upload/v1697046372/jlfc4fwg499c6angcbum.jpg'
                            alt='anh'
                            className='h-11 w-11 object-cover'
                          />
                        </button>
                        <div className='flex-grow px-2 pt-1 pb-2'>
                          <button className='line-clamp-2'>GEPA 50WG THUỐC TRỪ RẦY VÀ CÔN TRÙNG CHÍCH HÚT</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className='grid grid-cols-5 items-center'>
                    <div className='col-span-2'>
                      <div className='flex items-center justify-center'>
                        <span className='text-gray-300 line-through'></span>
                        <span className='text-orange'>₫100.000</span>
                      </div>
                    </div>
                    <div className='col-span-1'>
                      <p className='flex items-center text-center'>1</p>
                    </div>
                    <div className='col-span-1'>
                      <span className='text-orange'>đ100.000</span>
                    </div>
                    <div className='col-span-1'>
                      <button className='bg-none text-black transition-colors hover:text-orange'>Xóa</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='my-3 rounded-sm bg-white p-5 shadow'>
              <div className='mb-5 grid grid-cols-12 rounded-sm border border-gray-200 bg-white py-5 px-4 text-center text-sm text-gray-500 first:mt-0'>
                <div className='col-span-6'>
                  <div className='flex'>
                    <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                      <input type='checkbox' className='h-5 w-5 accent-orange' />
                    </div>
                    <div className='flex-grow'>
                      <div className='flex'>
                        <button className='h-20 w-20 flex-shrink-0'>
                          <img
                            src='https://res.cloudinary.com/da7tpv6qw/image/upload/v1697066298/vcsn7hhzz8nljz4inv84.jpg'
                            alt='anh'
                            className='h-11 w-11 object-cover'
                          />
                        </button>
                        <div className='flex-grow px-2 pt-1 pb-2'>
                          <button className='line-clamp-2'>SUPE LÂN DẠNG HẠT</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className='grid grid-cols-5 items-center'>
                    <div className='col-span-2'>
                      <div className='flex items-center justify-center'>
                        <span className='text-gray-300 line-through'></span>
                        <span className='text-orange'>₫400.000</span>
                      </div>
                    </div>
                    <div className='col-span-1'>
                      <p className='flex items-center text-center'>1</p>
                    </div>
                    <div className='col-span-1'>
                      <span className='text-orange'>đ400.000</span>
                    </div>
                    <div className='col-span-1'>
                      <button className='bg-none text-black transition-colors hover:text-orange'>Xóa</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>{' '}
            <div className='my-3 rounded-sm bg-white p-5 shadow'>
              <div className='mb-5 grid grid-cols-12 rounded-sm border border-gray-200 bg-white py-5 px-4 text-center text-sm text-gray-500 first:mt-0'>
                <div className='col-span-6'>
                  <div className='flex'>
                    <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                      <input type='checkbox' className='h-5 w-5 accent-orange' />
                    </div>
                    <div className='flex-grow'>
                      <div className='flex'>
                        <button className='h-20 w-20 flex-shrink-0'>
                          <img
                            src='https://res.cloudinary.com/da7tpv6qw/image/upload/v1697044676/fqhxrbx1jffnrounpsma.png'
                            alt='anh'
                            className='h-11 w-11 object-cover'
                          />
                        </button>
                        <div className='flex-grow px-2 pt-1 pb-2'>
                          <button className='line-clamp-2'>COMFEED 606</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className='grid grid-cols-5 items-center'>
                    <div className='col-span-2'>
                      <div className='flex items-center justify-center'>
                        <span className='text-gray-300 line-through'></span>
                        <span className='text-orange'>₫300.000</span>
                      </div>
                    </div>
                    <div className='col-span-1'>
                      <p className='flex items-center text-center'>1</p>
                    </div>
                    <div className='col-span-1'>
                      <span className='text-orange'>đ300.000</span>
                    </div>
                    <div className='col-span-1'>
                      <button className='bg-none text-black transition-colors hover:text-orange'>Xóa</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sticky bottom-0 z-10 mt-8 flex flex-col rounded-sm border border-gray-100 bg-white p-5 shadow sm:flex-row sm:items-center'>
          <div className='flex items-center'>
            <div className='flex flex-shrink-0 items-center justify-center pr-3'>
              <input type='checkbox' className='h-5 w-5 accent-orange' />
            </div>
            <button className='mx-3 border-none bg-none'>Chọn tất cả</button>
            <button className='mx-3 border-none bg-none'>Xóa</button>
          </div>

          <div className='mt-5 flex flex-col sm:ml-auto sm:mt-0 sm:flex-row sm:items-center'>
            <div>
              <div className='flex items-center sm:justify-end'>
                <div>Tổng thanh toán (3 sản phẩm):</div>
                <div className='ml-2 text-2xl text-orange'>₫800.000</div>
              </div>
            </div>
            <Button className='mt-5 flex h-10 w-52 items-center justify-center bg-green-600 text-sm uppercase text-white hover:bg-green-400 sm:ml-4 sm:mt-0'>
              Mua hàng
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
