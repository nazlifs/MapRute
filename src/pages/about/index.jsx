import NavbarComp from "../../components/Navbarcomp";

const About = () => {
    return (
      <div id="about" className="container mx-auto py-16 px-4 text-center">
        <NavbarComp/>
        <div className="mx-6">
        <h1 className="text-4xl font-bold mb-8">Tentang Danau Tao</h1>
        <div className="bg-gray-200">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Sejarah Danau Tao</h2>
          <p>Danau Tao adalah danau yang terletak di Sumatera Utara, Indonesia. Danau ini terbentuk melalui proses geologis yang kompleks, yang melibatkan aktivitas vulkanik dan perubahan iklim. Nama Tao berasal dari bahasa lokal yang memiliki makna khusus bagi masyarakat sekitar.</p>
          <p>Sejak lama, Danau Tao telah menjadi bagian penting dari sejarah dan kehidupan masyarakat setempat, yang sering kali mencerminkan hubungan mereka dengan alam dan sumber daya alam yang ada di sekitar danau.</p>
        </section>
  
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Geografi dan Fitur</h2>
          <p>Danau Tao memiliki luas sekitar [2 Hektar]. Dikelilingi oleh pegunungan dan hutan tropis, danau ini menawarkan pemandangan alam yang menakjubkan dan beragam spesies flora dan fauna. Lingkungan sekitar Danau Tao menyediakan habitat yang kaya untuk berbagai jenis satwa liar dan tumbuhan.</p>
        </section>
  
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Budaya dan Masyarakat</h2>
          <p>Masyarakat di sekitar Danau Tao sebagian besar terdiri dari [nama suku atau komunitas], yang memiliki tradisi dan adat istiadat yang unik. Festival dan perayaan tradisional sering diadakan untuk merayakan hubungan mereka dengan danau dan lingkungan sekitar. Kegiatan budaya ini menarik wisatawan dan memberikan wawasan tentang cara hidup lokal.</p>
        </section>
  
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Peta dan Panduan</h2>
          <p>Untuk membantu Anda merencanakan kunjungan, kami menyediakan peta lokasi Danau Tao serta panduan wisata. Informasi ini termasuk cara menuju ke danau, tempat-tempat menarik di sekitarnya, dan tips praktis untuk membuat kunjungan Anda menyenangkan.</p>
        </section>
        </div>
        </div>
      </div>
    );
  };
  
  export default About;
  