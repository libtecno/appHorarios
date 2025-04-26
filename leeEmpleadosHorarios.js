async function cargarEmpleadosConHorarios() {
    const { data, error } = await client
      .from('horarios')
      .select('fecha, entrada, salida, empleados(nombre, apellido, legajo)')
      .order('fecha', { ascending: true });
  
    if (error) {
      console.error("Error al cargar horarios:", error);
      return [];
    }
  
    const empleadosMap = {};
  
    data.forEach(row => {
      const nombreCompleto = `${row.empleados.apellido} ${row.empleados.nombre}`;
      if (!empleadosMap[nombreCompleto]) {
        empleadosMap[nombreCompleto] = { nombre: nombreCompleto, horarios: {} };
      }
  
      empleadosMap[nombreCompleto].horarios[row.fecha] = [
        row.entrada.slice(0, 5) || "", 
        row.salida.slice(0, 5) || ""
      ];
    });
  
    const empleados = Object.values(empleadosMap);
    console.log(empleados);
    return empleados;
  }
  
  