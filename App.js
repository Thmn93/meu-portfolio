import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Paleta de Cores: Dark Theme com Roxo e Azul
const colors = {
  bg: '#000000',
  secondary: '#0F0F1F',
  primary: '#7367F0',        // Roxo
  accent: '#4FACFE',          // Azul
  textPrimary: '#D1D5DB',    // Cinza Claro
  textSecondary: '#9CA3AF',  // Cinza Médio
  border: '#1F2937',         // Cinza Escuro
};

// ========== HOME / HERO ==========
const Home = () => {
  const styles = useStyles();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Hero Section with Gradient */}
      <View style={styles.heroSection}>
        <View style={styles.heroGradient}>
          <View style={styles.heroContent}>
            <Text style={styles.welcomeText}>👋 Bem-vindo!</Text>
            <Text style={styles.nameText}>Thiago Henrique</Text>
            <Text style={styles.professionText}>Desenvolvedor de Software & SQL Specialist</Text>
            
            <View style={styles.profileContainer}>
              <Image 
                source={{ uri: 'https://github.com/thmn93.png' }} 
                style={styles.heroImage} 
              />
            </View>

            <View style={styles.statsContainer}>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>5º</Text>
                <Text style={styles.statLabel}>Semestre DSM</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>+2</Text>
                <Text style={styles.statLabel}>Anos Exp.</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>8</Text>
                <Text style={styles.statLabel}>Tecnologias</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* CTA Button */}
      <View style={styles.ctaSection}>
        <TouchableOpacity style={styles.ctaButton} onPress={() => Linking.openURL('https://github.com/thmn93')}>
          <Ionicons name="logo-github" size={18} color="#FFFFFF" />
          <Text style={styles.ctaButtonText}>Ver meu GitHub</Text>
        </TouchableOpacity>
      </View>

      {/* Quote Section */}
      <View style={styles.quoteSection}>
        <Text style={styles.quoteIcon}>💡</Text>
        <Text style={styles.quoteText}>
          "Na tecnologia, sou apenas um aprendiz, mas na resolução de problemas, sempre sou um pensador criativo."
        </Text>
        <Text style={styles.quoteAuthor}>— Thiago Henrique</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Thiago Henrique</Text>
      </View>
    </ScrollView>
  );
};

// ========== ABOUT ==========
const About = () => {
  const styles = useStyles();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Sobre Mim</Text>
        <View style={styles.sectionLine}></View>
      </View>
      
      <View style={styles.aboutCard}>
        <Image 
          source={{ uri: 'https://github.com/thmn93.png' }} 
          style={styles.aboutImage} 
        />
        
        <View style={styles.aboutContent}>
          <Text style={styles.bodyText}>
            Sou Thiago Henrique, desenvolvedor de software em formação com especialização em SQL. Apaixonado por resolver problemas complexos e criar soluções inovadoras.
          </Text>

          <View style={styles.infoCard}>
            <Ionicons name="school" size={20} color={colors.accent} />
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Formação</Text>
              <Text style={styles.infoSubtitle}>5º semestre DSM - FATEC São José dos Campos</Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Ionicons name="briefcase" size={20} color={colors.primary} />
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Experiência</Text>
              <Text style={styles.infoSubtitle}>Faktory Sistemas - Especialista em SQL</Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Ionicons name="target" size={20} color={colors.accent} />
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Objetivo</Text>
              <Text style={styles.infoSubtitle}>Ser um dev Full-Stack de impacto</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Thiago Henrique</Text>
      </View>
    </ScrollView>
  );
};

// ========== EXPERIENCE ==========
const Experience = () => {
  const styles = useStyles();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Experiência</Text>
        <View style={styles.sectionLine}></View>
      </View>
      
      {/* Current Job */}
      <View style={styles.experienceCard}>
        <View style={styles.cardBadgeContainer}>
          <View style={styles.activeBadge}>
            <Text style={styles.activeBadgeText}>Atual</Text>
          </View>
        </View>
        
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Faktory Sistemas</Text>
          <Text style={styles.cardRole}>Especialista em SQL & Suporte Técnico</Text>
          <View style={styles.divider}></View>
          
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>✓ Resolução de chamados SQL Server</Text>
            <Text style={styles.bulletPoint}>✓ Análise tributária e fluxos ERP</Text>
            <Text style={styles.bulletPoint}>✓ Otimização de queries</Text>
            <Text style={styles.bulletPoint}>✓ Automação NF-e</Text>
          </View>
        </View>
      </View>

      {/* Previous Job */}
      <View style={styles.experienceCard}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Grand Hotel Royal</Text>
          <Text style={styles.cardRole}>Analista Financeiro</Text>
          <Text style={styles.periodText}>2023 — 2024</Text>
          <View style={styles.divider}></View>
          
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>✓ Gestão de caixa</Text>
            <Text style={styles.bulletPoint}>✓ Análise financeira</Text>
            <Text style={styles.bulletPoint}>✓ Controladoria</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Thiago Henrique</Text>
      </View>
    </ScrollView>
  );
};

// ========== SKILLS ==========
const Skills = () => {
  const styles = useStyles();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <View style={styles.sectionLine}></View>
      </View>
      
      {/* Technical Skills */}
      <View style={styles.skillSection}>
        <View style={styles.skillCategoryHeader}>
          <Ionicons name="code" size={20} color={colors.primary} />
          <Text style={styles.skillCategoryTitle}>Tecnologias</Text>
        </View>
        <View style={styles.skillsGrid}>
          {['SQL Server', 'T-SQL', 'React', 'Node.js', 'Next.js', 'JavaScript', 'Python', 'React Native'].map(skill => (
            <View key={skill} style={[styles.skillTag, styles.techSkillTag]}>
              <Text style={styles.skillTagText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Soft Skills */}
      <View style={styles.skillSection}>
        <View style={styles.skillCategoryHeader}>
          <Ionicons name="people" size={20} color={colors.accent} />
          <Text style={styles.skillCategoryTitle}>Competências</Text>
        </View>
        <View style={styles.skillsGrid}>
          {['Resolução de Problemas', 'Análise Crítica', 'Comunicação', 'Trabalho em Equipe', 'Adaptabilidade', 'Atenção'].map(skill => (
            <View key={skill} style={[styles.skillTag, styles.softSkillTag]}>
              <Text style={[styles.skillTagText, { color: colors.accent }]}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Business Knowledge */}
      <View style={styles.skillSection}>
        <View style={styles.skillCategoryHeader}>
          <Ionicons name="analytics" size={20} color={colors.primary} />
          <Text style={styles.skillCategoryTitle}>Negócios</Text>
        </View>
        <View style={styles.skillsGrid}>
          {['Fluxo de Caixa', 'Tributação NF-e', 'ERP', 'Controladoria', 'SQL Avançado'].map(skill => (
            <View key={skill} style={[styles.skillTag, styles.businessSkillTag]}>
              <Text style={[styles.skillTagText, { color: colors.primary }]}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Languages */}
      <View style={styles.skillSection}>
        <View style={styles.skillCategoryHeader}>
          <Ionicons name="globe" size={20} color={colors.accent} />
          <Text style={styles.skillCategoryTitle}>Idiomas</Text>
        </View>
        <View style={styles.skillsGrid}>
          {['🇧🇷 Português', '🇬🇧 Inglês Avançado'].map(lang => (
            <View key={lang} style={[styles.skillTag, styles.langSkillTag]}>
              <Text style={[styles.skillTagText, { color: colors.textPrimary }]}>{lang}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Thiago Henrique</Text>
      </View>
    </ScrollView>
  );
};

// ========== NAVIGATION ==========
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.bg,
            borderTopWidth: 2,
            borderTopColor: 'rgba(115, 103, 240, 0.1)',
            height: 70,
            paddingBottom: 12,
            paddingTop: 12,
            elevation: 15,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '700',
            marginTop: 6,
            letterSpacing: 0.3,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home-sharp';
            else if (route.name === 'About') iconName = 'person';
            else if (route.name === 'Experience') iconName = 'briefcase';
            else if (route.name === 'Skills') iconName = 'star';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            title: 'Início',
            tabBarLabel: 'Início',
          }} 
        />
        <Tab.Screen 
          name="About" 
          component={About} 
          options={{ 
            title: 'Sobre',
            tabBarLabel: 'Sobre',
          }} 
        />
        <Tab.Screen 
          name="Experience" 
          component={Experience} 
          options={{ 
            title: 'Experiência',
            tabBarLabel: 'Exp.',
          }} 
        />
        <Tab.Screen 
          name="Skills" 
          component={Skills} 
          options={{ 
            title: 'Skills',
            tabBarLabel: 'Skills',
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// ========== ESTILOS ==========

const useStyles = () => {
  const { width } = useWindowDimensions();
  const isWide = width >= 900;
  const isTablet = width >= 600;
  const contentMaxWidth = isWide ? 1000 : undefined;
  const horizontalPadding = isWide ? 40 : 20;
  const heroImageSize = isWide ? 240 : isTablet ? 200 : 160;
  const nameFontSize = isWide ? 60 : isTablet ? 48 : 38;
  const sectionTitleSize = isWide ? 36 : 30;
  const statNumberSize = isWide ? 28 : 22;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bg,
    },
    scrollContent: {
      paddingBottom: 30,
    },

    // ===== HERO SECTION =====
    heroSection: {
      minHeight: isWide ? 760 : isTablet ? 680 : 600,
    },
    heroGradient: {
      flex: 1,
      paddingTop: 40,
      paddingBottom: 40,
      paddingHorizontal: horizontalPadding,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.bg,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(115, 103, 240, 0.2)',
      width: '100%',
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
    },
    heroContent: {
      alignItems: 'center',
      width: '100%',
    },
    welcomeText: {
      fontSize: 16,
      color: colors.accent,
      fontWeight: '600',
      marginBottom: 16,
      letterSpacing: 0.5,
    },
    nameText: {
      fontSize: nameFontSize,
      fontWeight: '900',
      color: colors.textPrimary,
      marginBottom: 12,
      letterSpacing: -1,
      textAlign: 'center',
    },
    professionText: {
      fontSize: isWide ? 18 : 16,
      fontWeight: '600',
      color: colors.primary,
      marginBottom: 40,
      textAlign: 'center',
      letterSpacing: 0.3,
    },
    profileContainer: {
      marginBottom: 40,
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.3,
      shadowRadius: 20,
      elevation: 10,
    },
    heroImage: {
      width: heroImageSize,
      height: heroImageSize,
      borderRadius: heroImageSize / 2,
      borderWidth: 3,
      borderColor: colors.primary,
      backgroundColor: colors.secondary,
    },

    // Stats
    statsContainer: {
      flexDirection: isTablet ? 'row' : 'column',
      justifyContent: 'space-around',
      width: '100%',
      backgroundColor: 'rgba(115, 103, 240, 0.1)',
      borderRadius: 12,
      paddingVertical: 24,
      paddingHorizontal: isTablet ? 0 : 16,
      borderWidth: 1,
      borderColor: 'rgba(115, 103, 240, 0.2)',
      rowGap: 12,
    },
    statBox: {
      alignItems: 'center',
      flex: 1,
      marginBottom: isTablet ? 0 : 6,
    },
    statNumber: {
      fontSize: statNumberSize,
      fontWeight: '900',
      color: colors.primary,
      marginBottom: 4,
    },
    statLabel: {
      fontSize: 11,
      color: colors.textSecondary,
      fontWeight: '600',
      textAlign: 'center',
    },

    // CTA
    ctaSection: {
      paddingHorizontal: horizontalPadding,
      paddingVertical: 24,
      width: '100%',
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
    },
    ctaButton: {
      backgroundColor: colors.primary,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 16,
      borderRadius: 12,
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.4,
      shadowRadius: 12,
      elevation: 8,
    },
    ctaButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '700',
      marginLeft: 10,
      letterSpacing: 0.5,
    },

    // ===== QUOTE SECTION =====
    quoteSection: {
      marginHorizontal: horizontalPadding,
      marginVertical: 40,
      paddingVertical: 32,
      paddingHorizontal: 24,
      backgroundColor: 'rgba(79, 70, 229, 0.1)',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: 'rgba(79, 70, 229, 0.2)',
      alignItems: 'center',
      width: '100%',
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
    },
    quoteIcon: {
      fontSize: 40,
      marginBottom: 16,
    },
    quoteText: {
      fontSize: 15,
      fontStyle: 'italic',
      color: colors.textPrimary,
      lineHeight: 26,
      marginBottom: 16,
      fontWeight: '500',
      textAlign: 'center',
    },
    quoteAuthor: {
      fontSize: 12,
      color: colors.textSecondary,
      fontWeight: '600',
      letterSpacing: 0.5,
    },

    // ===== SECTION HEADER =====
    sectionHeader: {
      paddingHorizontal: horizontalPadding,
      paddingTop: 40,
      paddingBottom: 24,
      width: '100%',
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
    },
    sectionTitle: {
      fontSize: sectionTitleSize,
      fontWeight: '800',
      color: colors.textPrimary,
      letterSpacing: -1,
      marginBottom: 12,
    },
    sectionLine: {
      height: 4,
      width: 60,
      backgroundColor: colors.primary,
      borderRadius: 2,
    },

    // ===== ABOUT SECTION =====
    aboutCard: {
      marginHorizontal: horizontalPadding,
      marginBottom: 40,
      backgroundColor: colors.secondary,
      borderRadius: 16,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: 'rgba(115, 103, 240, 0.2)',
      flexDirection: isWide ? 'row' : 'column',
      width: '100%',
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
    },
    aboutImage: {
      width: isWide ? 360 : '100%',
      height: isWide ? 360 : 280,
      backgroundColor: 'rgba(115, 103, 240, 0.1)',
    },
    aboutContent: {
      padding: 24,
      flex: 1,
    },
    bodyText: {
      fontSize: 15,
      lineHeight: 26,
      color: colors.textSecondary,
      marginBottom: 24,
      textAlign: 'justify',
    },
    infoCard: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 20,
      paddingHorizontal: 16,
      paddingVertical: 16,
      backgroundColor: 'rgba(79, 70, 229, 0.05)',
      borderRadius: 12,
      borderLeftWidth: 4,
      borderLeftColor: colors.primary,
    },
    infoText: {
      flex: 1,
      marginLeft: 16,
    },
    infoTitle: {
      fontSize: 14,
      fontWeight: '700',
      color: colors.textPrimary,
      marginBottom: 4,
    },
    infoSubtitle: {
      fontSize: 13,
      color: colors.textSecondary,
      fontWeight: '500',
    },

    // ===== EXPERIENCE SECTION =====
    experienceCard: {
      marginHorizontal: horizontalPadding,
      marginBottom: 20,
      backgroundColor: colors.secondary,
      borderRadius: 16,
      paddingHorizontal: 24,
      paddingVertical: 24,
      borderWidth: 1,
      borderColor: 'rgba(115, 103, 240, 0.2)',
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
      width: '100%',
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
    },
    cardBadgeContainer: {
      marginBottom: 16,
    },
    activeBadge: {
      alignSelf: 'flex-start',
      backgroundColor: colors.primary,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 6,
    },
    activeBadgeText: {
      color: '#FFFFFF',
      fontSize: 10,
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    cardContent: {
      width: '100%',
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: '800',
      color: colors.textPrimary,
      marginBottom: 6,
      letterSpacing: -0.5,
    },
    cardRole: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.primary,
      marginBottom: 12,
    },
    periodText: {
      fontSize: 12,
      color: colors.textSecondary,
      fontStyle: 'italic',
      marginBottom: 12,
    },
    divider: {
      height: 1,
      backgroundColor: 'rgba(115, 103, 240, 0.1)',
      marginVertical: 16,
    },
    bulletContainer: {
      gap: 8,
    },
    bulletPoint: {
      fontSize: 14,
      color: colors.textSecondary,
      lineHeight: 22,
      fontWeight: '500',
    },

    // ===== SKILLS SECTION =====
    skillSection: {
      marginHorizontal: horizontalPadding,
      marginBottom: 40,
      width: '100%',
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
    },
    skillCategoryHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    skillCategoryTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: colors.textPrimary,
      marginLeft: 10,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    skillsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    skillTag: {
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 8,
      borderWidth: 1.5,
    },
    techSkillTag: {
      borderColor: colors.primary,
      backgroundColor: 'rgba(115, 103, 240, 0.1)',
    },
    softSkillTag: {
      borderColor: colors.accent,
      backgroundColor: 'rgba(79, 172, 254, 0.1)',
    },
    businessSkillTag: {
      borderColor: colors.primary,
      backgroundColor: 'rgba(115, 103, 240, 0.08)',
    },
    langSkillTag: {
      borderColor: 'rgba(209, 213, 219, 0.3)',
      backgroundColor: 'rgba(209, 213, 219, 0.05)',
    },
    skillTagText: {
      fontSize: 12,
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: 0.4,
      color: colors.primary,
    },

    // ===== FOOTER =====
    footer: {
      marginHorizontal: horizontalPadding,
      marginTop: 20,
      paddingTop: 24,
      paddingBottom: 24,
      borderTopWidth: 1,
      borderTopColor: 'rgba(115, 103, 240, 0.1)',
      alignItems: 'center',
      width: '100%',
      maxWidth: contentMaxWidth,
      alignSelf: 'center',
    },
    footerText: {
      fontSize: 12,
      fontWeight: '600',
      color: colors.textSecondary,
      letterSpacing: 0.3,
    },
  });
};