import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/pages/FilosofiLogo.css';

const FilosofiLogo = () => {
  // Sample data for color palette
  const colorPalette = [
    {
      id: 1,
      name: 'Biru Utama',
      hex: '#3498db',
      meaning: 'Melambangkan teknologi, inovasi, dan kepercayaan'
    },
    {
      id: 2,
      name: 'Biru Tua',
      hex: '#2c3e50',
      meaning: 'Melambangkan profesionalisme dan kedalaman ilmu'
    },
    {
      id: 3,
      name: 'Putih',
      hex: '#ffffff',
      meaning: 'Melambangkan kesucian, kejujuran, dan ketulusan'
    },
    {
      id: 4,
      name: 'Abu-abu',
      hex: '#95a5a6',
      meaning: 'Melambangkan keseimbangan dan netralitas'
    }
  ];

  // Sample data for logo elements
  const logoElements = [
    {
      id: 1,
      title: 'Lingkaran',
      description: 'Lingkaran pada logo melambangkan kesatuan dan keutuhan. Ini menggambarkan bahwa HIMASIF adalah satu kesatuan yang utuh dan tidak terpisahkan.',
      image: 'https://picsum.photos/id/40/600/400'
    },
    {
      id: 2,
      title: 'Simbol Teknologi',
      description: 'Simbol teknologi pada logo menggambarkan fokus HIMASIF pada bidang teknologi informasi dan sistem informasi.',
      image: 'https://picsum.photos/id/41/600/400'
    },
    {
      id: 3,
      title: 'Huruf H',
      description: 'Huruf H yang didesain secara unik melambangkan identitas HIMASIF yang kuat dan mudah dikenali.',
      image: 'https://picsum.photos/id/42/600/400'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="logo-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="logo-hero-title">Filosofi Logo HIMASIF</h1>
              <p className="logo-hero-subtitle">
                Mengenal makna dan arti di balik logo Himpunan Mahasiswa Sistem Informasi UPJ
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Logo Display Section */}
      <section className="logo-section">
        <Container>
          <div className="logo-display">
            <img 
              src="https://picsum.photos/id/30/300/300" 
              alt="Logo HIMASIF" 
              className="logo-image"
            />
            <h2 className="logo-title">Logo HIMASIF</h2>
            <p className="logo-subtitle">
              Logo resmi Himpunan Mahasiswa Sistem Informasi Universitas Pembangunan Jaya
            </p>
          </div>

          <Row className="justify-content-center">
            <Col lg={8}>
              <p className="text-center mb-5">
                Logo HIMASIF dirancang untuk mencerminkan identitas, visi, dan nilai-nilai
                yang dianut oleh Himpunan Mahasiswa Sistem Informasi UPJ. Setiap elemen dalam
                logo memiliki makna dan filosofi tersendiri yang mewakili semangat dan tujuan organisasi.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Logo Elements Section */}
      <section className="element-section">
        <Container>
          <h2 className="text-center mb-5">Elemen Logo</h2>
          
          {logoElements.map((element, index) => (
            <Row className="align-items-center mb-5" key={element.id}>
              {index % 2 === 0 ? (
                <>
                  <Col md={6} className="mb-4 mb-md-0">
                    <div className="element-image">
                      <img 
                        src={element.image} 
                        alt={element.title} 
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <h3 className="element-title">{element.title}</h3>
                    <p className="element-text">{element.description}</p>
                  </Col>
                </>
              ) : (
                <>
                  <Col md={6} className="order-md-2 mb-4 mb-md-0">
                    <div className="element-image">
                      <img 
                        src={element.image} 
                        alt={element.title} 
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                  <Col md={6} className="order-md-1">
                    <h3 className="element-title">{element.title}</h3>
                    <p className="element-text">{element.description}</p>
                  </Col>
                </>
              )}
            </Row>
          ))}
        </Container>
      </section>

      {/* Color Palette Section */}
      <section className="element-section">
        <Container>
          <h2 className="text-center mb-5">Palet Warna</h2>
          
          <div className="color-palette">
            {colorPalette.map(color => (
              <div className="color-item" key={color.id}>
                <div 
                  className="color-box" 
                  style={{ backgroundColor: color.hex }}
                ></div>
                <h4 className="color-name">{color.name}</h4>
                <p className="color-hex">{color.hex}</p>
                <p>{color.meaning}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Typography Section */}
      <section className="typography-section">
        <Container>
          <h2 className="text-center mb-5">Tipografi</h2>
          
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="font-example">
                <h3 className="font-name">Montserrat</h3>
                <p className="font-sample">HIMASIF</p>
                <p className="font-description">
                  Font utama yang digunakan dalam logo HIMASIF. Font ini dipilih karena
                  karakternya yang modern, tegas, dan mudah dibaca.
                </p>
              </div>
            </Col>
            
            <Col md={6}>
              <div className="font-example">
                <h3 className="font-name">Roboto</h3>
                <p className="font-sample">Sistem Informasi</p>
                <p className="font-description">
                  Font pendukung yang digunakan untuk teks "Sistem Informasi" pada logo.
                  Font ini dipilih karena keselarasannya dengan Montserrat.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Meaning Section */}
      <section className="meaning-section">
        <Container>
          <h2 className="meaning-title">Makna Keseluruhan</h2>
          <p className="meaning-text">
            Secara keseluruhan, logo HIMASIF melambangkan semangat inovasi, profesionalisme,
            dan kebersamaan yang menjadi nilai-nilai utama organisasi. Logo ini juga mencerminkan
            visi HIMASIF untuk menjadi wadah pengembangan potensi mahasiswa Sistem Informasi
            yang profesional, inovatif, dan berdaya saing tinggi dalam bidang teknologi informasi.
          </p>
          <p className="meaning-text mt-4">
            Dengan desain yang modern dan bermakna, logo HIMASIF menjadi identitas visual yang
            kuat dan mudah dikenali, sekaligus menjadi kebanggaan bagi seluruh anggota HIMASIF UPJ.
          </p>
        </Container>
      </section>
    </>
  );
};

export default FilosofiLogo;
