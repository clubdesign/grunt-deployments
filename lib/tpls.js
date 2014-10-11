/**
 * Lo-Dash Template Helpers
 * http://lodash.com/docs/#template
 * https://github.com/gruntjs/grunt/wiki/grunt.template
 */
var tpls = {

	search_replace: "php <%= scriptPath %>srdb.cli.php -h <%= host %> -u <%= user %> -p <%= pass %> -n <%= database %> -s \"<%= search %>\" -r \"<%= replace %>\" <%= flags %>",

	//search_replace: "sed -i '' 's#<%= search %>#<%= replace %>#g' <%= path %>",

    backup_path: "<%= backups_dir %>/<%= env %>/<%= date %>/<%= time %>",

    mysql: "mysql -h <%= host %> -u <%= user %> -p<%= pass %> -P<%= port %> <%= database %>",

    ssh: "ssh -p <%= port %> <%= user %>@<%= host %>",

    scp: "scp -r -C -P <%= port %> <%= src_path %> <%= user %>@<%= host %>:<%= dest_path %>",

    mysqldump: "mysqldump -h <%= host %> -u<%= user %> -p<%= pass %> -P<%= port %> <%= database %> <%= ignoreTables %>"
};


module.exports = tpls;
