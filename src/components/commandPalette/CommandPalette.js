import React, { useState, useEffect, useCallback } from "react";
import "./CommandPalette.scss";

const commands = [
    { id: "home", name: "Aller à l'Accueil", section: "greeting", icon: "fas fa-home" },
    { id: "skills", name: "Compétences Tech", section: "skills", icon: "fas fa-code" },
    { id: "experience", name: "Expériences Pro", section: "experience", icon: "fas fa-briefcase" },
    { id: "education", name: "Formations", section: "education", icon: "fas fa-graduation-cap" },
    { id: "projects", name: "Projets", section: "projects", icon: "fas fa-project-diagram" },
    { id: "contact", name: "Me Contacter", section: "profile", icon: "fas fa-envelope" },
];

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);

    const togglePalette = useCallback(() => {
        setIsOpen((prev) => !prev);
        setSearch("");
        setSelectedIndex(0);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                togglePalette();
            }
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        const handleToggleEvent = () => togglePalette();

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("toggle-command-palette", handleToggleEvent);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("toggle-command-palette", handleToggleEvent);
        };
    }, [togglePalette]);

    const filteredCommands = commands.filter((cmd) =>
        cmd.name.toLowerCase().includes(search.toLowerCase())
    );

    const executeCommand = (cmd) => {
        const element = document.getElementById(cmd.section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
        } else if (e.key === "ArrowUp") {
            setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        } else if (e.key === "Enter") {
            executeCommand(filteredCommands[selectedIndex]);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="command-palette-overlay" onClick={() => setIsOpen(false)}>
            <div className="command-palette-container" onClick={(e) => e.stopPropagation()}>
                <div className="command-palette-input-wrapper">
                    <i className="fas fa-search search-icon"></i>
                    <input
                        autoFocus
                        type="text"
                        className="command-palette-input"
                        placeholder="Tapez une commande ou cherchez une section..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <kbd className="command-palette-kbd">ESC</kbd>
                </div>
                <div className="command-palette-results">
                    {filteredCommands.length > 0 ? (
                        filteredCommands.map((cmd, index) => (
                            <div
                                key={cmd.id}
                                className={`command-item ${index === selectedIndex ? "active" : ""}`}
                                onMouseEnter={() => setSelectedIndex(index)}
                                onClick={() => executeCommand(cmd)}
                            >
                                <i className={cmd.icon}></i>
                                <span>{cmd.name}</span>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">Aucun résultat trouvé...</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
