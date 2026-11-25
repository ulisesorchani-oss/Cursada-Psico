import { Catedra, Materia } from '../constants';

export const EDI_PORTAL_URL = 'https://edipsicouba.net.ar/apuntes/apuntes-digitales/';
export const EDI_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1IsobV4j9dXOUAVaSDqL7KB-Dm6FSZCjhtwpymbhsBUg/edit#gid=0';
export const EDI_CBC_DRIVE_URL =
  'https://drive.google.com/drive/folders/11X-ixrDQaSBVhQGKhZufRp7rfTe6eZrH';

/**
 * Enlaces directos oficiales de la pestaña "FREUD - LACAN - DSM 5"
 * de la planilla de Bibliografía Digital gratuita del EDI – CEP.
 */
export const EDI_RECURSOS_AUTORES = {
  freudObrasCompletas:
    'https://drive.google.com/drive/folders/1DezDjWez_4pYOar_C-FOu_al0hjgqyDi?usp=sharing',
  lacanSeminariosEscritos:
    'https://drive.google.com/drive/folders/19w4N5E8AdIujvbIMYD4Cj1OrTBsi6H4e?usp=sharing',
  lacanTopologia:
    'https://drive.google.com/file/d/1jkbBqLlle3b0ASWdegred_ZEB9hDWJ8P/view?usp=sharing',
  laplancheDiccionario:
    'https://drive.google.com/file/d/1py_VrfRPa_p-geH6WjJYmIcSGENPSyr6/view?usp=sharing',
  barlowClinicalHandbook:
    'https://drive.google.com/file/d/1JinwphH5ClMSGgbTV6D1NhNUg_FNh4gQ/view?usp=drivesdk',
  barlowProtocoloUnificado:
    'https://drive.google.com/file/d/1Jit_RxLAikn6ZHKCpnSkue369noux9vL/view?usp=drivesdk'
} as const;

/**
 * Equivalencias entre códigos actualizados (modificatoria 2026) y los códigos
 * históricos usados en la planilla oficial de Bibliografía Digital del EDI – CEP.
 */
const PLAN_2026_TO_EDI_CODE: Record<string, string> = {
  '544': '1044', // Procesos Psicológicos Básicos I (González)
  '545': '1045', // Procesos Psicológicos Básicos II (Bur)
  '546': '1046', // Psicología del Aprendizaje I (Barreiro)
  '547': '1047', // Psicología del Aprendizaje II (Zalazar)
  '553': '53', // Psicología del Desarrollo: Niñez I
  '554': '54', // Psicología del Desarrollo: Niñez II (Sorgen)
  '555': '55', // Psicología del Desarrollo: Adolescencia I
  '556': '56', // Psicología del Desarrollo: Adolescencia II
  '577': '71', // Ética, Deontología y Derechos Humanos I (Ormart)
  '578': '723', // Ética, Deontología y Derechos Humanos II (Bareiro)
  '644': '144', // Psicología Organizacional e Institucional I (Funes Molineri)
  '539': '39', // Psicología Organizacional e Institucional II (Vitale)
  '574': '114', // Psicología Clínica y Psicoterapias I - Cát. I (Muraro)
  '575': '115', // Psicología Clínica y Psicoterapias I - Cát. II (Vázquez)
  '570': '70', // Psicología Clínica y Psicoterapias II - Cát. I (Etchevers)
  '571': '634' // Psicología Clínica y Psicoterapias II - Cát. II (Keegan)
};

/**
 * Carpetas oficiales de Google Drive por código de cátedra extraídas de la
 * planilla pública "BIBLIOGRAFÍA DIGITAL - EDI CEP" (Lic. en Psicología).
 */
export const EDI_CATEDRA_LINKS: Record<string, string> = {
  '34': 'https://drive.google.com/drive/folders/1xbSwNOB83TUv-qWUHbcykIzClKEubEPy?usp=sharing', // Historia de la Psicología (Ibarra)
  '35': 'https://drive.google.com/open?id=1Jp4y8kAdhb1jR7wGJtPMvpyUO9QeFF5l', // Psicología Social (Vodovotz)
  '36': 'https://drive.google.com/open?id=1rTWcI06UxgIWsn_kMjTVQ7xG59assIso', // Psicología Social (Zubieta)
  '37': 'https://drive.google.com/open?id=1PVhj6kufvtnlc252gjysf75_gqCnGxNI', // Psicopatología (Naparstek)
  '38': 'https://drive.google.com/open?id=1E62_Zb8O8GZWfzMRndvdWrfR7YWQkGR8', // Psicopatología (Schejtman)
  '39': 'https://drive.google.com/open?id=1ggVcK7lZOnrPhe3oxCUj-5JM-7PbVZLA', // Psicología Institucional (Vitale)
  '40': 'https://drive.google.com/open?id=1O1oPN8uZ73dKBZkLL2VnkugAEBCPCblj', // Psicología del Trabajo (Ferrari)
  '41': 'https://drive.google.com/open?id=1apROPWq6p1XoGLsU-a42MB_bHUVLc8p_', // Psicología Educacional I
  '42': 'https://drive.google.com/drive/folders/1N8NK8V0IaE-56MoOutByRJnZ5awIDbSS?usp=sharing', // Exploración y Diagnóstico II (Vinue)
  '43': 'https://drive.google.com/drive/folders/10Lv5e4KbvycRCsjzflnQu4RAZbhXaliu', // Clínica de Niños y Adolescentes (Franco)
  '48': 'https://drive.google.com/open?id=1Cdj2f9FrnzKues-k5Ltkz3OfelNhI-Gd', // Neurofisiología (China)
  '49': 'https://drive.google.com/open?id=1lYFiuSKH7IUZlV8x1jgOkZZXPrDg1620', // Psicoanálisis: Freud (Pino)
  '50': 'https://drive.google.com/open?id=14RnfDbgoO-qcKrRaoTtdPUeU7qECtTD5', // Psicoanálisis: Freud (Laznik)
  '51': 'https://drive.google.com/drive/folders/1jPVzCXT4Vh9nm73N-jmBXYXxMMUMbJS1', // Psicoanálisis: Escuela Inglesa (Eisenberg)
  '52': 'https://drive.google.com/drive/folders/1XD53eP-XVmxZdiqr2flUf7WbtAbCyTpk', // Psicoanálisis: Escuela Inglesa (Luzzi)
  '53': 'https://drive.google.com/open?id=1y6H5qL6BJdoa9wBt_-gyawt2Jw6sBKau', // Psicología Evolutiva Niñez I
  '54': 'https://drive.google.com/drive/folders/1KnNIHut6M3CWtH4A_llw6_3YH28VLFU1?usp=sharing', // Psicología Evolutiva Niñez II (Sorgen)
  '55': 'https://drive.google.com/open?id=1IC57RlmgsZcrNi00kTnvezQjoaa0IkcB', // Psicología Evolutiva Adolescencia I
  '56': 'https://drive.google.com/open?id=13MhsfYwva2K3mc6XBL7cAJbAPNmELXuL', // Psicología Evolutiva Adolescencia II
  '57': 'https://drive.google.com/drive/folders/1d6nE5KpC6HL1kvsNSLH692Ae3erQchJ0', // Psicoanálisis: Escuela Francesa (De Olaso)
  '58': 'https://drive.google.com/open?id=1J2JYc1F5tPc2ygmuS5Odpr-mvAO9Y31z', // Exploración y Diagnóstico I (Castro Solano)
  '59': 'https://drive.google.com/open?id=1KScxJ-W89YS5tn4KdU4dtm9favdcvERa', // Exploración y Diagnóstico I (Mikulic)
  '60': 'https://drive.google.com/open?id=1V1kE2pcFcSfzaVZ90sUNcfAQVLe7sLCN', // Estadística (Galibert)
  '61': 'https://drive.google.com/open?id=1bgnKQV3cY4t-DWmIAMk3r3-LmPti6e7W', // Metodología de la Investigación (Azzollini)
  '62': 'https://drive.google.com/drive/folders/1ZHAL0X0hXjcpeqlMhCs7pQlZ2XeZQvLk', // Metodología de la Investigación (Ynoub)
  '63': 'https://drive.google.com/open?id=1IbgMMTSULhl33GuoP8A1ZBjr4WPDogem', // Teoría y Técnica de Grupos I
  '64': 'https://drive.google.com/drive/folders/1waxr_Zv7qZjkg1J45JaGOBtzcte9hBwS', // Teoría y Técnica de Grupos II (Rolon)
  '65': 'https://drive.google.com/open?id=1kknXryN0MS_bO6WRlug6PHm2lJ5Xslei', // Salud Pública y Salud Mental (De Lellis)
  '66': 'https://drive.google.com/open?id=1LmJmgcih2tmQXf1uD-DVYQNUjrpgkmiq', // Salud Pública y Salud Mental (Tajer)
  '67': 'https://drive.google.com/drive/folders/1UOdOKdHHPKK9L0AC_I_U5T419CBj9Twk', // Psicología Preventiva (Leale)
  '70': 'https://drive.google.com/open?id=1GtK-zPv5ZfwqjInnf88x9yN6RZwmmvda', // Psicoterapias, Emergencia e Interconsulta (Etchevers)
  '71': 'https://drive.google.com/open?id=1nC94RsJF9X6wuMoDbSfpTCKvbAzaRhur', // Ética y Derechos Humanos (Ormart)
  '75': 'https://drive.google.com/drive/folders/1qH7Ns6Ia7tgv2nEvJyK0cT7n1kQ9VSu8?usp=sharing', // Criminología (García Méndez)
  '78': 'https://drive.google.com/drive/folders/1H2yV6hwdu0I67wOvhzvAcvNwAjVrbja6?usp=sharing', // Psicología Fenomenológica y Existencial (Muñoz)
  '80': 'https://drive.google.com/drive/folders/1gRfHwEB39u5eEPn0Pzpr3sSnD9_S-gUT', // Psicología de la Tercera Edad y Vejez (Iacub)
  '81': 'https://drive.google.com/drive/folders/1sYng0xc2ZupyjbsXVHb_j3rx4M20X4g4', // Fisiopatología y Enfermedades Psicosomáticas (Ulnik)
  '82': 'https://drive.google.com/drive/folders/12xt7RJPmjNuOLgiQV5ZGq6ZrzeBTe7-3', // Psicodiagnóstico: Rorschach (García)
  '83': 'https://drive.google.com/open?id=1erDKIC21DlaeFH9Z5HEcE7eMoBnJzP1Q', // Psicología Educacional (Nakache)
  '84': 'https://drive.google.com/drive/folders/1MME7HRAL5pMXQawy5BOyXe-MlkhBkhRP', // Estrategias de Intervención Comunitarias (Pesiney)
  '85': 'https://drive.google.com/drive/folders/1hcA-WDx05rDzSGd_3DTodzcfc63e0MUm', // Psicopedagogía Clínica (Álvarez)
  '86': 'https://drive.google.com/drive/folders/1QmpSgOEJQTnAqZuvLQ7cB3pp5Krp8GFa', // Orientación Vocacional y Ocupacional (Aisenson)
  '87': 'https://drive.google.com/drive/folders/1PX8m40S4X7eXt1vKLSdMBfDKzYL2QHHh', // Problemas Sociológicos en Psicología (Ferrari)
  '89': 'https://drive.google.com/drive/folders/1pHyC9r3aGB3I1txtT6c08wEirpamoXDK?usp=sharing', // Problemas Antropológicos en Psicología (Montañez)
  '90': 'https://drive.google.com/drive/folders/16ZtaVAV5_qRY1mkl_zYs5-YRPvzzoi7K', // Biología del Comportamiento (Muzio)
  '91': 'https://drive.google.com/drive/folders/1zHhLKl9QMOTf2w9bnj63Y99QGvo79zQ8', // Neuropsicología (Politis)
  '96': 'https://drive.google.com/drive/folders/1gqyLvpeZxQ2ldg4QQfne1x5qMuR2yPqs?usp=sharing', // Problemas Filosóficos en Psicología (Allegro)
  '102': 'https://drive.google.com/drive/folders/1fVof04e9gwsx8XwO2E2oSRzraQr69Gl3', // Psicopatología Infanto-Juvenil (Tkach)
  '105': 'https://drive.google.com/drive/folders/1FhYR7I4Els36MxxyINArbOrGuJrWVbUv', // Introducción a los Estudios de Género (Tajer)
  '107': 'https://drive.google.com/drive/folders/1yqVO3yDF6MbgcHqU0DJxq1aUwVLg2ou8?usp=sharing', // Práctica: Discapacidad en Niñez y Adolescencia (Febbraio)
  '113': 'https://drive.google.com/open?id=16YYyNk_m34ldHztAEYVTyExdlAVIaTMV', // Exploración y Diagnóstico II (Febbraio)
  '114': 'https://drive.google.com/drive/folders/1gEu5lMgfscxqbfSpI4zi7eXvLrZY7rL-', // Clínica de Adultos (Muraro)
  '115': 'https://drive.google.com/open?id=1TtB06z4_zH8AjA23T4OfLJqz0M0Df39I', // Clínica de Adultos (Vázquez)
  '118': 'https://drive.google.com/open?id=1tpxLNN9yIwE6TBmeYtFdRoMqQKTXJHCW', // Historia de la Psicología (Borinsky)
  '122': 'https://drive.google.com/drive/folders/1AIACbb5qbBN-j2kj7GxBd5iB1NKd0Ucx', // Psicoanálisis: Escuela Francesa (Muñoz)
  '123': 'https://drive.google.com/open?id=1vyeBMpGyQQy4Ogy_jZC6i20CAv-xEFdd', // Neurofisiología (Kufa)
  '136': 'https://drive.google.com/drive/folders/1fJSHWbYTVa_FW8bkGAEl2ETh43bdcrST', // Psicología de la Discapacidad (Febbraio)
  '144': 'https://drive.google.com/open?id=1qpkib2OIEvx75pKbVxolhuoAyKltDno_', // Psicología Institucional (Funes Molineri)
  '158': 'https://drive.google.com/drive/folders/1liUrpGYpd9sfUxjouoGOLXw9bF_pWV_-', // Teoría y Técnica de la Clínica Sistémica (Wittner)
  '167': 'https://drive.google.com/open?id=1e8eRsjDGPJJZh7b3mzApsFIHceBRyZNa', // Estadística (Muiños)
  '189': 'https://drive.google.com/drive/folders/10tYvVuxLhm4PmR0lhVQCz_W6owgeTsn7', // Epidemiología (Samaniego)
  '191': 'https://drive.google.com/drive/folders/19qFIhChj6Tj7s3_VoH12Ddu6ZeC8hPBC?usp=sharing', // Intervenciones Psicológico-Forenses (De la Iglesia)
  '607': 'https://drive.google.com/drive/folders/1NfW-0s0wPrXCvHwzlORXMyb-ub2oT73i', // Psicología Aplicada al Deporte (Barrios)
  '616': 'https://drive.google.com/drive/folders/1tIomLFVHd-tFse4yFAfd3Ju9TlVmZDOZ', // Psicofarmacología (Herlyn)
  '632': 'https://drive.google.com/drive/folders/1N-7PUUi5jEkSsxwXUDsOtStvPkLssDxg?usp=sharing', // Práctica: Familia y Enfermedad Crónica (Pupko)
  '634': 'https://drive.google.com/open?id=1RorjW3h9AeUrnq1TgG6dsxnSRAENvlqd', // Psicoterapias, Emergencia e Interconsulta (Keegan)
  '635': 'https://drive.google.com/drive/folders/1GVPganvDeZlCz2ly1BQPRuAKCIUKTMPk', // Diagnóstico y Abordaje de Crisis Infanto-Juveniles (Saavedra)
  '654': 'https://drive.google.com/drive/folders/1IXUKx4iXHPX9NliTsn2tJbjcru2jgd0P', // Clínica Psicoanalítica (Laznik)
  '658': 'https://drive.google.com/drive/folders/19rcBUkrD0gSV1-ge2tkmfNXks0WA0sGe', // Metodología Psicoanalítica (De Olaso)
  '660': 'https://drive.google.com/drive/folders/1SoA-g03haBgfkWKEIjQBHjDqOWzgc2Lb', // Informática, Educación y Sociedad (Zalazar)
  '662': 'https://drive.google.com/drive/folders/1FB2ZeJzGTwZyCt4yrjZipNZgyPAcM7LO', // Selección e Incorporación de Personal (Fernández)
  '676': 'https://drive.google.com/open?id=1LuNM-7wg48In0Anjq8OHPAVEeTOEmqAQ', // Idioma: Inglés Módulo I
  '677': 'https://drive.google.com/open?id=1H-vUCbz0kSNPKAg8OF8q4kW9F5iET70T', // Idioma: Francés Módulo I (Miñones)
  '678': 'https://drive.google.com/open?id=1HK0056zUTrbZSfHpFnzxRzNUHSONjMMf', // Idioma: Inglés Módulo II
  '679': 'https://drive.google.com/open?id=1sgltFf2qvQB-2Vrclj49bKVg4SfEROtz', // Idioma: Francés Módulo II (Miñones)
  '691': 'https://drive.google.com/drive/folders/11DNMkjZlylve_vwYeKQnjeUc6QC-lw6U', // Niños y Adolescentes en Conflicto con la Ley Penal (Ghiso)
  '692': 'https://drive.google.com/drive/folders/1kzxwvmW0gebcAEBn4Qvt7eK1hIrzkrnh', // Psicología del Delito y del Delincuente (Llull Casado)
  '693': 'https://drive.google.com/drive/folders/1Y6sO5wvMMgqPM811pdVDgBK-WolYP3ao?usp=sharing', // Capacitación y Desarrollo en las Organizaciones (Sicardi)
  '703': 'https://drive.google.com/drive/folders/1_AHHfu_TCB2Gu288r4D8-oy00Ll3jqie?usp=sharing', // Práctica: Neuropsicología Práctica (Vanotti)
  '719': 'https://drive.google.com/drive/folders/1xOsPNUIzWBYO6M3ANKmrAVVgAdU_MCjc', // Psicología Aplicada a las Organizaciones (Napoli)
  '723': 'https://drive.google.com/open?id=12BeiupP8UPM6WU9gTnYd72L3uvKV86dj', // Ética y Derechos Humanos (Bareiro)
  '724': 'https://drive.google.com/open?id=18Hbrh82-MNlapUV6NWY15yBddfQEgd7m', // Psicología del Trabajo (Borrajo)
  '768': 'https://drive.google.com/open?id=1KkZ8BUqCdqjYTo_oih4XjK_-T4Y_hzh2', // Psicología Jurídica (Ghiso)
  '769': 'https://drive.google.com/open?id=1QHnHaNRX-gh4dWaWXHkFPtZQwq35m98f', // Psicología Jurídica (Puhl)
  '770': 'https://drive.google.com/drive/folders/17vxt6b90rcpzsmARvKH5q0SXJeBk_PAT', // Clínica de las Toxicomanías y el Alcoholismo (Naparstek)
  '771': 'https://drive.google.com/drive/folders/1U1RApydpMP9yldIoDu9DytYVvXipy3bY', // Clínica Cognitivo-Comportamental (Keegan)
  '780': 'https://drive.google.com/drive/folders/1x-7KLjECMVMdRr8dM0wkyNABILXwmVwi', // Análisis y Modificación de la Conducta (Dahab)
  '781': 'https://drive.google.com/drive/folders/1Qkvy35VbocAPvlu2sh2fXb0F1qy7v59t', // Victimología (Acebal)
  '782': 'https://drive.google.com/drive/folders/1-Us7qb4rzxeTrw35WGwgyS8UyseVIjUa', // Técnicas Psicológicas en el Ámbito Jurídico (Rodríguez)
  '798': 'https://drive.google.com/drive/folders/1jLEztvwYwyOHdKnWlY0Hyy84dDlvrHei', // Construcción de los Conceptos Psicoanalíticos (Córdoba)
  '803': 'https://drive.google.com/drive/folders/1fc9IPUkYGhP3jPmIXwQ0VbBUe6jieTPa', // Criminología (Marteau)
  '806': 'https://drive.google.com/drive/folders/1O5VeH_SVstyAXY6wvvxbgN1p0bOPMNi2?usp=sharing', // Orientación Lacaniana, Clínica y Escritura (Sotelo)
  '807': 'https://drive.google.com/drive/folders/1CXg5o2uWAf_Ux7ruR4LcltFKiHyqA20J', // Usos del Síntoma (Lombardi)
  '808': 'https://drive.google.com/drive/folders/13ugL_OkHA0afmTw1AkD1lmwrqnuj7VNM', // Clínica de la Discapacidad y Problemas en el Desarrollo (Bruner)
  '810': 'https://drive.google.com/drive/folders/1NNkmZAQqQepI-N5BuNztPhSHBTxQFBHv?usp=sharing', // Psicología Política (Biglieri)
  '814': 'https://drive.google.com/drive/folders/15yaQ5qE5A1qEcbweuokxDyL78Ul6Bemp', // Clínica del Autismo y la Psicosis en la Infancia (Tendlarz)
  '815': 'https://drive.google.com/drive/folders/1EhDKyTZkUL39N-Mw67F6YJjHpFPiXanf?usp=sharing', // Clínica de las Anorexias, Bulimias y la Obesidad (Donghi)
  '816': 'https://drive.google.com/drive/folders/1lXKpPBPgTYIoofgcCuTduCoq44uLi9tn', // El Rol del Psicólogo en el Equipo Interdisciplinario (Perrotta)
  '831': 'https://drive.google.com/drive/folders/1VoGN-VTkI949AyoUlRRMGNvLd4mFnTSP', // Práctica: Psicología de la Discapacidad (Bruner)
  '844': 'https://drive.google.com/drive/folders/178lSAWingHbq1ov-NwfVVIpYAa6ooFXR?usp=sharing', // Práctica: TCC y Proceso de Investigación (Korman)
  '851': 'https://drive.google.com/drive/folders/1qo9zRaNstYaHRwu-i77upeMT3JlyME5s?usp=drive_link', // Práctica: Psicología Aeronáutica y Factores Humanos (Machin)
  '852': 'https://drive.google.com/drive/folders/1lesxM-H_k10E5zW0_ML7r0cYKQyFVAng?usp=drive_link', // Práctica: Abordaje Comunitario en Barrios Vulnerables (Vizioli)
  '860': 'https://drive.google.com/drive/folders/1gXcJwsFxexc_g8bpF_2BQOHwA72Qv411?usp=drive_link', // Psicología de la Personalidad (Garay)
  '1044': 'https://drive.google.com/open?id=1ZrgzgiCzhByRS2IyCkAi480ME8IfVyIv', // Procesos Psicológicos Básicos (González)
  '1045': 'https://drive.google.com/open?id=1AwwDe-IPf0WYOzlGOpHMGzvQ_udNxPaj', // Procesos Psicológicos Básicos (Bur)
  '1046': 'https://drive.google.com/open?id=1UOHhfJnerKag88WgWi8O52yZvCeNavTS', // Psicología del Aprendizaje (Barreiro)
  '1047': 'https://drive.google.com/open?id=1MSuzhBNgrlTn9BlPxolYNyCSEtzwefSQ' // Psicología del Aprendizaje (Zalazar)
};

function extractCatedraCode(catedra: Catedra): string | null {
  if (catedra.link) {
    const linkMatch = catedra.link.match(/catedra=(\d+)/i);
    if (linkMatch) {
      return String(parseInt(linkMatch[1], 10));
    }
  }
  const nameMatch = catedra.nombre.match(/Cód\.?\s*0*(\d+)/i);
  if (nameMatch) {
    return String(parseInt(nameMatch[1], 10));
  }
  return null;
}

export function getEdiLinkForCatedra(
  materia: Materia,
  catedra: Catedra
): { url: string; label: string } | null {
  if (materia.ciclo === 'CBC') {
    return {
      url: EDI_CBC_DRIVE_URL,
      label: 'Apuntes CBC (EDI)'
    };
  }

  const rawCode = extractCatedraCode(catedra);
  if (!rawCode) return null;

  const ediCode = PLAN_2026_TO_EDI_CODE[rawCode] ?? rawCode;
  const url = EDI_CATEDRA_LINKS[ediCode];
  if (!url) return null;

  return {
    url,
    label: 'Apuntes EDI (Drive)'
  };
}
