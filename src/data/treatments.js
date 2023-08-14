const treatments = [
    {
        id:1,
        name:'SHOCK DE HIDRATACIÓN',
        aditionals: '+ Infusión + Pastelería del día',
        duration: 50,
        description:'Nuestro completo tratamiento de hidratación facial ayuda a devolver los niveles óptimos de agua a las capas más profundas de la piel. Gracias a la profundidad del tratamiento, la piel se verá más luminosa y se sentirá más fresca, y confortable. Los niveles de flexibilidad de la piel aumentarán notablemente y su capacidad de protección ante agentes hostiles incrementará logrando una piel más fuerte y resistente.',
        price: null,
        salePrice: 10000,
        giftLinkId: 148,
        category: 'Tratamientos Faciales'
    },
    {
        id:2,
        name:'HYDRA 3D REGU AGE',
        aditionals: '+ Infusión + Pastelería del día',
        duration: 50,
        description:'Nuestro completo tratamiento reafirmante diseñado exclusivamente para personas mayores a los 30 años logrará un efecto lifting instantáneo y duradero en la piel. El paso del tiempo, junto con los agentes externos dejan marcas en nuestra piel. Gracias a la combinación de nuestros tratamientos la piel estará más protegida frente a agentes hostiles. La piel se sentirá más firme, tensa y resistente. Las arrugas y líneas de expresión disminuirán dando lugar a una piel lisa y firme.',
        price: 13000,
        salePrice: null,
        giftLinkId: 149,
        category: 'Tratamientos Faciales'
    },
    {
        id:3,
        name:'SHOCK HYDRA FILLER REDENSIFY',
        aditionals: '+ Infusión + Pastelería del día',
        duration: 50,
        description:'A medida que nuestra piel envejece aparecen los signos de envejecimiento y la sequedad en nuestra piel. La falta de confort, la sensación de tirantez y los signos de envejecimientos tales como los surcos profundos y la falta de densidad se hacen presentes. A través de un tratamiento redensificante devolveremos la densidad, el volumen y la firmeza a la piel. Gracias a la presencia de 3 activos(matrixyl 3000+cafeisilane C+Agente soft focus) lograremos una experiencia multisensorial donde nuestra piel recuperará la suavidad y sedosidad de las pieles jóvenes.',
        price: 13000,
        salePrice: null,
        giftLinkId: 152,
        category: 'Tratamientos Faciales'
    },
    {
        id:4,
        name:'MASAJE WELLNESS ANTI ESTRÉS',
        aditionals: '+ Infusión + Pastelería del día',
        duration: 50,
        description:'Los masajes relajantes logran un estado de calma físico y mental que muchas veces no puede obtenerse naturalmente.La intención principal es darle al cuerpo un estado de tranquilidad y descanso mediante movimientos apropiados para alivianar músculos y dejar una sensación que no hubiese sido posible obtener con otros métodos.Además de relajar los músculos, favorecen la circulación, calman los nervios y despejan la mente.Se aplican con aceites, música acorde, iluminación suave y en un ambiente agradable, tranquilo y muy bien cuidado que inspira paz y tranquilidad.',
        price: 11500,
        salePrice: null,
        giftLinkId: 155,
        category: 'Tratamientos Corporales'
    },
    {
        id:5,
        name:'MASAJE DESCONTRACTURANTE',
        aditionals: '+ Infusión + Pastelería del día',
        duration: 50,
        description:'Te proponemos un ambiente tranquilo y confortable para obtener plena relajación muscular.Nuestros masajes son ideales para eliminar definitivamente contracturas musculares, reducir el stress, estimular el equilibrio energético, evitar el insomnio, aliviar tensiones y olvidarse de la rutina y el cansancio acumulado durante la semana.Los masajes descontracturantes, además de ser un momento de confort y de relax para el cuerpo, ayudan a liberar hormonas llamadas endorfinas que actúan como antidepresivos naturales del organismo y que generan en los seres humanos emociones positivas de bienestar.',
        price: 11500,
        salePrice: null,
        giftLinkId: 157,
        category: 'Tratamientos Corporales'
    },
    {
        id:6,
        name:'MASAJE CON PIEDRAS CALIENTES',
        aditionals: '+ Infusión + Pastelería del día',
        duration: 50,
        description:'A través de los beneficios de la Termoterapia, este masaje estimula el sistema circulatorio, alivia el dolor, relaja los tejidos musculares y ayuda a eliminar toxinas creando una sensación única de bienestar.Para realizar este masaje se utilizan piedras que contienen magneto el cual posee propiedades desinflamatorias y descongestivas.',
        price: 11500,
        salePrice: null,
        giftLinkId: 159,
        category: 'Tratamientos Corporales'
    },
    {
        id:7,
        name:'REFLEXOLOGÍA',
        aditionals: '+ Infusión + Pastelería del día',
        duration: 25,
        description:'Técnica milenaria con fundamentos de la medicina tradicional china.Este masaje se realiza en todo el pie estimulando las terminales nerviosas y los canales energéticos de todo el cuerpo buscando equilibrar el balance de los 5 elementos(madera, tierra, fuego, metal y agua).Ejerciendo presión en puntos específicos se logra desbloquear la tensión y dolor. ** Este tratamiento se focaliza en todo el pie.',
        price: 9900,
        salePrice: null,
        giftLinkId: 161,
        category: 'Tratamientos Corporales'
    },
]