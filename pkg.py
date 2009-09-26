#!/usr/bin/python



openlog("pkg.pl", "ndelay", LOG_DAEMON);
syslog(LOG_INFO,"recreating software packages...");



my @soft_list = ("joomla","phpbb","wordpress");

foreach my $soft (@soft_list) {
	print "$soft\n";
	mkdir "/var/lib/oxhosting/$soft" if !-d "/var/lib/oxhosting/$soft";
	chdir "/home/pkg_$soft/htdocs";
	system "rm -f /var/lib/oxhosting/$soft/soft.*";
	system "tar -cf soft.tar `ls -A`";
	system "mv soft.tar /var/lib/oxhosting/$soft/";
	system "mysqldump --user=pkg_$soft --password=qwerty92_$soft pkg_$soft > /var/lib/oxhosting/$soft/soft.mysql";
}

syslog(LOG_INFO,"finished");
closelog();


