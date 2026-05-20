export const categories = [
  { id: 'cemento-cal', name: 'Cemento y Cal', icon: '🏗️' },
  { id: 'ceramicos-revestimientos', name: 'Cerámicos y Revestimientos', icon: '🟫' },
  { id: 'hierro-acero', name: 'Hierro y Acero', icon: '🔩' },
  { id: 'ladrillos-bloques', name: 'Ladrillos y Bloques', icon: '🧱' },
  { id: 'pinturas', name: 'Pinturas y Revestimientos', icon: '🎨' },
  { id: 'sanitarios-plomeria', name: 'Sanitarios y Plomería', icon: '🚿' },
  { id: 'electricidad', name: 'Electricidad', icon: '⚡' },
  { id: 'herramientas', name: 'Herramientas', icon: '🔨' },
  { id: 'techos-impermeabilizacion', name: 'Techos e Impermeabilización', icon: '🏠' },
  { id: 'arena-piedra', name: 'Arena, Piedra y Áridos', icon: '⛏️' },
  { id: 'yeso-durlock', name: 'Yeso y Durlock', icon: '🪣' },
  { id: 'pegamentos-adhesivos', name: 'Pegamentos y Adhesivos', icon: '🔧' },
];

export const products = [
  // Cemento y Cal
  { id: 'cemento-portland-50kg', name: 'Cemento Portland 50kg', description: 'Cemento Portland normal bolsa x 50kg.', category: 'cemento-cal', unit: 'bolsa' },
  { id: 'cal-hidraulica-30kg', name: 'Cal Hidráulica 30kg', description: 'Cal hidráulica bolsa x 30kg.', category: 'cemento-cal', unit: 'bolsa' },
  { id: 'mezcla-lista-40kg', name: 'Mezcla Lista 40kg', description: 'Mezcla lista para mampostería bolsa x 40kg.', category: 'cemento-cal', unit: 'bolsa' },

  // Ladrillos
  { id: 'ladrillo-hueco-18', name: 'Ladrillo Hueco 18x18x33', description: 'Ladrillo hueco 18 huecos para muros.', category: 'ladrillos-bloques', unit: 'unidad' },
  { id: 'ladrillo-comun', name: 'Ladrillo Común', description: 'Ladrillo macizo para mampostería.', category: 'ladrillos-bloques', unit: 'millar' },
  { id: 'bloque-hormigon-20', name: 'Bloque de Hormigón 20x20x40', description: 'Bloque de hormigón para muros portantes.', category: 'ladrillos-bloques', unit: 'unidad' },

  // Hierro
  { id: 'hierro-redondo-8', name: 'Hierro Redondo ø8mm x 12m', description: 'Hierro redondo ADN 420 ø8mm barra 12m.', category: 'hierro-acero', unit: 'barra' },
  { id: 'hierro-redondo-10', name: 'Hierro Redondo ø10mm x 12m', description: 'Hierro redondo ADN 420 ø10mm barra 12m.', category: 'hierro-acero', unit: 'barra' },
  { id: 'hierro-redondo-12', name: 'Hierro Redondo ø12mm x 12m', description: 'Hierro redondo ADN 420 ø12mm barra 12m.', category: 'hierro-acero', unit: 'barra' },
  { id: 'malla-acero-15x15', name: 'Malla de Acero 15x15 ø4.2', description: 'Malla electrosoldada para losas y contrapisos.', category: 'hierro-acero', unit: 'paño' },
  { id: 'alambre-recocido', name: 'Alambre Recocido Nº16', description: 'Alambre recocido para atado de hierros.', category: 'hierro-acero', unit: 'kg' },

  // Cerámicos
  { id: 'ceramico-45x45', name: 'Cerámico Piso 45x45', description: 'Cerámico para piso 45x45cm. Primera calidad.', category: 'ceramicos-revestimientos', unit: 'm²' },
  { id: 'porcelanato-60x60', name: 'Porcelanato 60x60', description: 'Porcelanato rectificado 60x60cm.', category: 'ceramicos-revestimientos', unit: 'm²' },
  { id: 'azulejo-20x40', name: 'Azulejo Pared 20x40', description: 'Azulejo para revestimiento de paredes.', category: 'ceramicos-revestimientos', unit: 'm²' },

  // Pinturas
  { id: 'latex-interior-20l', name: 'Látex Interior 20L', description: 'Pintura látex para interiores, alto rendimiento.', category: 'pinturas', unit: 'balde' },
  { id: 'latex-exterior-20l', name: 'Látex Exterior 20L', description: 'Pintura látex para exteriores, resistente al agua.', category: 'pinturas', unit: 'balde' },
  { id: 'esmalte-sintetico-4l', name: 'Esmalte Sintético 4L', description: 'Esmalte sintético brillante para maderas y metales.', category: 'pinturas', unit: 'lata' },
  { id: 'impermeabilizante-membrana', name: 'Membrana Impermeabilizante x20kg', description: 'Membrana acrílica para techos y terrazas.', category: 'pinturas', unit: 'balde' },
  { id: 'fijador-sellador-20l', name: 'Fijador/Sellador 20L', description: 'Fijador al agua para interiores y exteriores.', category: 'pinturas', unit: 'balde' },

  // Sanitarios
  { id: 'inodoro-estandar', name: 'Inodoro Estándar c/tapa', description: 'Inodoro de cerámica con tapa y accesorios.', category: 'sanitarios-plomeria', unit: 'unidad' },
  { id: 'lavatorio-colgar', name: 'Lavatorio de Colgar', description: 'Lavatorio de cerámica para colgar, sin pedestal.', category: 'sanitarios-plomeria', unit: 'unidad' },
  { id: 'canio-pvc-100', name: 'Caño PVC Cloacal 100mm x 4m', description: 'Caño PVC para desagüe cloacal 100mm.', category: 'sanitarios-plomeria', unit: 'barra' },
  { id: 'canio-pvc-63', name: 'Caño PVC Presión 63mm x 6m', description: 'Caño PVC para agua a presión 63mm.', category: 'sanitarios-plomeria', unit: 'barra' },

  // Electricidad
  { id: 'cable-1x2.5', name: 'Cable Unipolar 1x2.5mm²', description: 'Cable unipolar flexible 2.5mm² x rollo 100m.', category: 'electricidad', unit: 'rollo' },
  { id: 'cable-1x4', name: 'Cable Unipolar 1x4mm²', description: 'Cable unipolar flexible 4mm² x rollo 100m.', category: 'electricidad', unit: 'rollo' },
  { id: 'tablero-12-bocas', name: 'Tablero 12 Bocas', description: 'Tablero eléctrico termomagnético 12 bocas.', category: 'electricidad', unit: 'unidad' },
  { id: 'llave-simple', name: 'Llave Simple Pulsador', description: 'Llave simple de luz para embutir.', category: 'electricidad', unit: 'unidad' },

  // Herramientas
  { id: 'pala-punta-mango', name: 'Pala Punta c/mango', description: 'Pala de punta con mango de madera reforzado.', category: 'herramientas', unit: 'unidad' },
  { id: 'casco-obra', name: 'Casco de Seguridad', description: 'Casco de seguridad para obra, certificado.', category: 'herramientas', unit: 'unidad' },
  { id: 'nivel-aluminio-120cm', name: 'Nivel de Aluminio 120cm', description: 'Nivel de aluminio con 3 burbujas, 120cm.', category: 'herramientas', unit: 'unidad' },
  { id: 'cinta-metrica-5m', name: 'Cinta Métrica 5m', description: 'Cinta métrica con freno automático, 5 metros.', category: 'herramientas', unit: 'unidad' },

  // Techos
  { id: 'chapa-zinc-c27', name: 'Chapa Zinc C27 x 3m', description: 'Chapa de zinc ondulada C27, largo 3m.', category: 'techos-impermeabilizacion', unit: 'unidad' },
  { id: 'membrana-aluminio-40kg', name: 'Membrana c/aluminio 40kg', description: 'Membrana asfáltica con aluminio para techos.', category: 'techos-impermeabilizacion', unit: 'rollo' },
  { id: 'teja-ceramica', name: 'Teja Cerámica Colonial', description: 'Teja cerámica colonial para techos inclinados.', category: 'techos-impermeabilizacion', unit: 'unidad' },

  // Arena y áridos
  { id: 'arena-fina-m3', name: 'Arena Fina x m³', description: 'Arena fina lavada para revoques y terminaciones.', category: 'arena-piedra', unit: 'm³' },
  { id: 'arena-gruesa-m3', name: 'Arena Gruesa x m³', description: 'Arena gruesa para hormigones y contrapisos.', category: 'arena-piedra', unit: 'm³' },
  { id: 'pedregullo-m3', name: 'Pedregullo 6/20 x m³', description: 'Pedregullo 6/20 para hormigones.', category: 'arena-piedra', unit: 'm³' },

  // Yeso y Durlock
  { id: 'yeso-bolsa-40kg', name: 'Yeso Fino 40kg', description: 'Yeso fino para terminaciones interiores.', category: 'yeso-durlock', unit: 'bolsa' },
  { id: 'placa-durlock-12mm', name: 'Placa Durlock 12.5mm', description: 'Placa de yeso estándar 1.20x2.40m.', category: 'yeso-durlock', unit: 'placa' },
  { id: 'perfil-montante-70', name: 'Perfil Montante 70mm', description: 'Perfil montante galvanizado 70mm x 3m.', category: 'yeso-durlock', unit: 'unidad' },

  // Pegamentos
  { id: 'pegamento-ceramico-30kg', name: 'Pegamento Cerámico 30kg', description: 'Adhesivo cementicio para cerámicos y porcelanatos.', category: 'pegamentos-adhesivos', unit: 'bolsa' },
  { id: 'fragüe-5kg', name: 'Fragüe x 5kg', description: 'Fragüe para juntas de cerámicos. Varios colores.', category: 'pegamentos-adhesivos', unit: 'bolsa' },
  { id: 'sellador-poliuretano', name: 'Sellador Poliuretano 600ml', description: 'Sellador poliuretano para juntas y fisuras.', category: 'pegamentos-adhesivos', unit: 'unidad' },
];
