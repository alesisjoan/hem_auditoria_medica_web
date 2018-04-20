var classificationTree = [
    {
        classification: "Tipo de Incidente*",
        subTree: [
            {
                classification: "Administración clínica",
                subTree: [],
                final: false
            },
            {
                classification: "Proceso/procedimiento clínico",
                subTree: [],
                final: false
            },
            {
                classification: "Documentación",
                subTree: [],
                final: false
            },
            {
                classification: "Infección asociada a la atención sanitaria",
                subTree: [],
                final: false
            },
            {
                classification: "Medicación/líquidos para administración i.v.",
                subTree: [],
                final: false
            },
            {
                classification: "Sangre/productos sanguíneos",
                subTree: [],
                final: false
            },
            {
                classification: "Nutrición",
                subTree: [],
                final: false
            },
            {
                classification: "Oxígeno/gases/vapores",
                subTree: [],
                final: false
            },
            {
                classification: "Dispositivos/equipos médicos",
                subTree: [],
                final: false
            },
            {
                classification: "Accidentes de los pacientes*",
                subTree: [
                    {
                        classification: "Fuerza no penetrante",
                        subTree: [],
                        final: false
                    },
                    {
                        classification: "Fuerza punzante/penetrante",
                        subTree: [],
                        final: false
                    },
                    {
                        classification: "Otra fuerza mecánica",
                        subTree: [],
                        final: false
                    },
                    {
                        classification: "Mecanismo térmico",
                        subTree: [],
                        final: false
                    },
                    {
                        classification: "Amenaza a la respiración",
                        subTree: [],
                        final: false
                    },
                    {
                        classification: "Exposición a productos químicos u otras sustancias",
                        subTree: [],
                        final: false
                    },
                    {
                        classification: "Otro mecanismo de lesión especificado",
                        subTree: [],
                        final: false
                    },
                    {
                        classification: "Exposición a[l efecto de] fenómenos meteorológicos, catástrofes naturales u otras fuerzas de la naturaleza",
                        subTree: [],
                        final: false
                    },
                    {
                        classification: "Caídas*",
                        subTree: [{
                            classification: "Tipo de caída*",
                            subTree: [
                                {
                                    classification: "Tropezón/traspié*",
                                    subTree: [],
                                    final: true
                                },
                                {
                                    classification: "Resbalón*",
                                    subTree: [],
                                    final: true
                                },
                                {
                                    classification: "Desmayo*",
                                    subTree: [],
                                    final: true
                                },
                                {
                                    classification: "Pérdida de equilibrio*",
                                    subTree: [],
                                    final: true
                                },

                            ],
                            final: false
                        },
                            {
                                classification: "Elemento implicado en la caída*",
                                subTree: [

                                    {
                                        classification: "Cuna*",
                                        subTree: [],
                                        final: true
                                    },

                                    {
                                        classification: "Cama*",
                                        subTree: [],
                                        final: true
                                    },

                                    {
                                        classification: "Silla*",
                                        subTree: [],
                                        final: true
                                    },

                                    {
                                        classification: "Camilla*",
                                        subTree: [],
                                        final: true
                                    },

                                    {
                                        classification: "Inodoro*",
                                        subTree: [],
                                        final: true
                                    },

                                    {
                                        classification: "Equipo terapéutico*",
                                        subTree: [],
                                        final: true
                                    },

                                    {
                                        classification: "Escaleras/escalones*",
                                        subTree: [],
                                        final: true
                                    },
                                    {
                                        classification: "Transporte/sujeción por otra persona*",
                                        subTree: [],
                                        final: true
                                    },
                                ],
                                final: false
                            },

                        ],
                        final: false
                    },

                ],
                final:false
            },
            {
                classification: "Infraestructuras/locales/instalaciones",
                subTree: [],
                final: false
            },
            {
                classification: "Recursos/gestión de la organización",
                subTree: [],
                final: false
            },
        ]
    }]
;

export default classificationTree;
