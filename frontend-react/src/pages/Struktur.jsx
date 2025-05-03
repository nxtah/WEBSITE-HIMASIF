import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/pages/Struktur.css';

const Struktur = () => {
  // Sample data for organizational structure
  const strukturData = {
    ketuaUmum: {
      name: 'Nama Ketua Umum',
      position: 'Ketua Umum',
      image: 'https://picsum.photos/id/1005/300/300',
      quote: 'Memimpin dengan integritas dan inovasi'
    },
    wakilKetua: {
      name: 'Nama Wakil Ketua',
      position: 'Wakil Ketua',
      image: 'https://picsum.photos/id/1006/300/300',
      quote: 'Mendukung visi dan misi HIMASIF'
    },
    sekretaris: [
      {
        name: 'Nama Sekretaris 1',
        position: 'Sekretaris 1',
        image: 'https://picsum.photos/id/1010/300/300',
        quote: 'Administrasi yang teratur adalah kunci keberhasilan'
      },
      {
        name: 'Nama Sekretaris 2',
        position: 'Sekretaris 2',
        image: 'https://picsum.photos/id/1011/300/300',
        quote: 'Dokumentasi yang baik untuk organisasi yang lebih baik'
      }
    ],
    bendahara: [
      {
        name: 'Nama Bendahara 1',
        position: 'Bendahara 1',
        image: 'https://picsum.photos/id/1012/300/300',
        quote: 'Pengelolaan keuangan yang transparan'
      },
      {
        name: 'Nama Bendahara 2',
        position: 'Bendahara 2',
        image: 'https://picsum.photos/id/1013/300/300',
        quote: 'Akuntabilitas dalam setiap transaksi'
      }
    ],
    divisi: [
      {
        name: 'Divisi Pendidikan',
        koordinator: 'Nama Koordinator',
        image: 'https://picsum.photos/id/1014/300/300',
        members: ['Anggota 1', 'Anggota 2', 'Anggota 3']
      },
      {
        name: 'Divisi Humas',
        koordinator: 'Nama Koordinator',
        image: 'https://picsum.photos/id/1015/300/300',
        members: ['Anggota 1', 'Anggota 2', 'Anggota 3']
      },
      {
        name: 'Divisi Acara',
        koordinator: 'Nama Koordinator',
        image: 'https://picsum.photos/id/1016/300/300',
        members: ['Anggota 1', 'Anggota 2', 'Anggota 3']
      },
      {
        name: 'Divisi Publikasi',
        koordinator: 'Nama Koordinator',
        image: 'https://picsum.photos/id/1017/300/300',
        members: ['Anggota 1', 'Anggota 2', 'Anggota 3']
      }
    ]
  };

  return (
    <div className="struktur-page">
      {/* Header Section */}
      <section className="struktur-header">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8} className="text-center">
              <h1 className="page-title">Struktur Organisasi</h1>
              <p className="page-subtitle">Kepengurusan HIMASIF Periode 2023/2024</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Structure Section */}
      <section className="struktur-main">
        <Container>
          {/* Ketua & Wakil */}
          <Row className="justify-content-center mb-5">
            <Col md={5} className="mb-4">
              <Card className="struktur-card text-center">
                <div className="position-label ketua-label">Ketua Umum</div>
                <Card.Img variant="top" src={strukturData.ketuaUmum.image} className="struktur-img" />
                <Card.Body>
                  <Card.Title>{strukturData.ketuaUmum.name}</Card.Title>
                  <Card.Text className="struktur-quote">
                    "{strukturData.ketuaUmum.quote}"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={5} className="mb-4">
              <Card className="struktur-card text-center">
                <div className="position-label wakil-label">Wakil Ketua</div>
                <Card.Img variant="top" src={strukturData.wakilKetua.image} className="struktur-img" />
                <Card.Body>
                  <Card.Title>{strukturData.wakilKetua.name}</Card.Title>
                  <Card.Text className="struktur-quote">
                    "{strukturData.wakilKetua.quote}"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Sekretaris */}
          <h2 className="section-title text-center mb-4">Sekretaris</h2>
          <Row className="justify-content-center mb-5">
            {strukturData.sekretaris.map((sekretaris, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="struktur-card text-center">
                  <div className="position-label sekretaris-label">{sekretaris.position}</div>
                  <Card.Img variant="top" src={sekretaris.image} className="struktur-img" />
                  <Card.Body>
                    <Card.Title>{sekretaris.name}</Card.Title>
                    <Card.Text className="struktur-quote">
                      "{sekretaris.quote}"
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Bendahara */}
          <h2 className="section-title text-center mb-4">Bendahara</h2>
          <Row className="justify-content-center mb-5">
            {strukturData.bendahara.map((bendahara, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="struktur-card text-center">
                  <div className="position-label bendahara-label">{bendahara.position}</div>
                  <Card.Img variant="top" src={bendahara.image} className="struktur-img" />
                  <Card.Body>
                    <Card.Title>{bendahara.name}</Card.Title>
                    <Card.Text className="struktur-quote">
                      "{bendahara.quote}"
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Divisi */}
          <h2 className="section-title text-center mb-4">Divisi</h2>
          <Row className="justify-content-center">
            {strukturData.divisi.map((divisi, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <Card className="struktur-card text-center h-100">
                  <div className="position-label divisi-label">{divisi.name}</div>
                  <Card.Img variant="top" src={divisi.image} className="struktur-img" />
                  <Card.Body>
                    <Card.Title>{divisi.koordinator}</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">Koordinator</Card.Subtitle>
                    <Card.Text className="divisi-members">
                      <strong>Anggota:</strong>
                      <ul className="list-unstyled">
                        {divisi.members.map((member, idx) => (
                          <li key={idx}>{member}</li>
                        ))}
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Struktur;
