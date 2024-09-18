import NavbarComp from "../../components/Navbarcomp"
import home from "../../assets/Home.jpg"
import buah from '../../assets/buah.jpg'
import dodol from '../../assets/Dodol.jpg'
import sirup from '../../assets/Sirup.jpg'
import mushola from '../../assets/Mushola.jpg'
import toilet from '../../assets/toilet.jpeg'
import paralayang from '../../assets/paralayang.jpg'


const Home = () => {

    return (
        <div>
            <NavbarComp/>
            <img src={home} className="w-screen h-screen"></img>
            <div className="container mx-auto text-center">
                <p className="m-auto text-lg">Desa Batang Onang Baru merupakan salah satu desa di kecamatan Batang Onang Kabupaten Padang Lawas Utara,
                    Sumatera Utara. Desa tersebut memiliki keindahan alam yaitu Danau Tao, Danau ini menawarkan hamparan bebukitan ala teletubbies, 
                    rumput yang menghijau dan menguning,  dikelilingi pepohonan yang sangat rindang serta danau dengan  warna hijau Toska,
                    keindahan Danau Tao menjadi daya tarik lokal dan mancanegara untuk mengunjungi desa Batang Onang Baru, 
                    masyarakatnya juga ramah tama dan masih menjunjung tinggi nilai budaya dan adat istiadat yang ada di desa Batang Onang Baru 
                    Danau bisa jadi alternatif libur akhir tahun maupun tahun baru bagi masyarakat lokal dan manca negara 
                    <br/>
                    Mata pencarian masyarakat di Batang Onang Baru kebanyakan bertani, selain potensi alam yang dimiliki Batang Onang Baru, cagar budaya, 
                    sejarah dan adat istiadat menjadi daya tarik yang ada di desa ini karena masih banyak peninggalan-peninggalan sejarah yang disimpan 
                    oleh masyarakatnya dan juga masih dilestarikan.</p>
            </div>
            <div id="gallery" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Suvenir & Fasilitas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gambar placeholder */}
          
          <div className='flex items-center justify-center relative h-72 w-96'>
            <img src={buah} className='h-full w-full object-cover' alt="Buah"/>
            <div className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-white text-center py-2'>
              Buah Balakka
            </div>
          </div>
          <div className='flex items-center justify-center relative h-72 w-96'>
            <img src={dodol} className='h-full w-full object-cover' alt="Dodol"/>
            <div className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-white text-center py-2'>
              Dodol Balakka
            </div>
          </div>
          <div className='flex items-center justify-center relative h-72 w-96'>
            <img src={sirup} className='h-full w-full object-cover' alt="Sirup"/>
            <div className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-white text-center py-2'>
              Sirup Balakka
            </div>
          </div>
          <div className='flex items-center justify-center relative h-72 w-96'>
            <img src={mushola} className='h-full w-full object-cover' alt="Mushola"/>
            <div className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-white text-center py-2'>
              Mushola
            </div>
          </div>
          <div className='flex items-center justify-center relative h-72 w-96'>
            <img src={toilet} className='h-full w-full object-cover' alt="Toilet"/>
            <div className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-white text-center py-2'>
              Toilet
            </div>
          </div>
          <div className='flex items-center justify-center relative h-72 w-96'>
            <img src={paralayang} className='h-full w-full object-cover' alt="Paralayang"/>
            <div className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-white text-center py-2'>
              Paralayang
            </div>
          </div>
          
        </div>
      </div>
    </div>
        </div>
    )
}

export default Home