const db = firebase.firestore();
const auth = firebase.auth();

new Vue({
  data() {
    return {
      name: '',
      usuarios: [],
      countOfPage: 10,
      currPage: 1,
      filter_name: ''
    }
  },
  computed: {
    // filteredRows: function () {
    //   var filter_name = this.filter_name.toLowerCase();
    //   return (this.filter_name.trim() !== '') ?
    //     this.rows.filter(function (d) { return d.name.toLowerCase().indexOf(filter_name) > -1; }) :
    //     this.rows;
    // },

    pageStart: function () {
      return (this.currPage - 1) * this.countOfPage;
    },
    totalPage: function () {
      return Math.ceil(this.usuarios.length / this.countOfPage);
    }
  },
  methods: {
    setPage(idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currPage = idx;
    },
    ExportExcel(type, fn, dl) {
      var elt = this.$refs.exportable_table;
      var wb = XLSX.utils.table_to_book(elt, { sheet: "Sheet JS" });
      return dl ?
        XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
        XLSX.writeFile(wb, fn || (("data" + '.' || 'SheetJSTableExport.') + (type || 'xlsx')));
    },
    cerrarSesion() {
      // e.preventDefault();
      auth.signOut().then(() => {
        window.location.href = "index.html";

      });
    },
    obtenerDatos() {
      const onGetDatos = (callback) => db.collection("informacion").onSnapshot(callback);
      onGetDatos((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let usuario = doc.data();
          usuario.id = doc.id;
          this.usuarios.push(usuario);
        });
      });

    },

  },
  mounted() {
    this.obtenerDatos();
  },
}).$mount('#app')