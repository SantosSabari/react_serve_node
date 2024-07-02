module.exports = {
    getAllSongs: (req, res) => {
        // let query = "SELECT * FROM `players` ORDER BY id ASC"; // query database to get all the players

        // execute query
        // db.query(query, (err, result) => {
        //     if (err) {
        //         res.redirect('/');
        //     }
        // });

        const songs = [
            { id: 1, name: 'Ali payuthe' },
            { id: 2, name: 'Va machane' },
            { id: 3, name: 'Oh Baby oh Baby' },
          ];
        res.json(songs);
    },
};